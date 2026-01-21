import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.js";
import { insertMessageSchema, insertNewsletterSubscriptionSchema } from "../shared/schema.js";
import { api } from "../shared/routes.js";
import { z } from "zod";

function generateExcerpt(content: string): string {
  // Simple HTML strip and truncate
  const plainText = content.replace(/<[^>]*>?/gm, ' ');
  return plainText.substring(0, 150).trim() + (plainText.length > 150 ? '...' : '');
}

// Hardcoded admin credentials
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "padher2024";

// Simple session store for admin login
const activeSessions: Map<string, { username: string; loginTime: Date }> = new Map();

function generateSessionToken(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Auth middleware for admin routes
  const authenticateAdmin = (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No authorization token provided" });
    }

    const token = authHeader.split(" ")[1];
    const session = activeSessions.get(token);

    if (!session) {
      return res.status(401).json({ message: "Invalid or expired session" });
    }

    req.admin = session;
    next();
  };

  // Admin Login
  app.post("/api/auth/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;

      if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = generateSessionToken();
      activeSessions.set(token, { username, loginTime: new Date() });

      res.json({ 
        message: "Login successful", 
        token,
        admin: { username }
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Admin Logout
  app.post("/api/auth/admin/logout", authenticateAdmin, async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader?.split(" ")[1];

      if (token) {
        activeSessions.delete(token);
      }

      res.json({ message: "Logged out successfully" });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Verify admin session
  app.get("/api/auth/admin/verify", authenticateAdmin, async (req, res) => {
    res.json({ valid: true, admin: req.admin });
  });

  // === Posts ===

  app.get(api.posts.list.path, async (req, res) => {
    const posts = await storage.getPosts();
    res.json(posts);
  });

  app.get(api.posts.get.path, async (req, res) => {
    const post = await storage.getPost(Number(req.params.id));
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  });

  app.post(api.posts.create.path, async (req, res) => {
    try {
      const input = api.posts.create.input.parse(req.body);
      const excerpt = generateExcerpt(input.content);
      const post = await storage.createPost({ ...input, excerpt });
      res.status(201).json(post);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.put(api.posts.update.path, async (req, res) => {
    try {
      const input = api.posts.update.input.parse(req.body);
      let excerpt;
      if (input.content) {
        excerpt = generateExcerpt(input.content);
      }

      const post = await storage.updatePost(Number(req.params.id), { ...input, excerpt });
      res.json(post);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.delete(api.posts.delete.path, async (req, res) => {
    await storage.deletePost(Number(req.params.id));
    res.status(204).send();
  });

  // === Gallery ===
  app.get(api.gallery.list.path, async (req, res) => {
    const items = await storage.getGalleryItems();
    res.json(items);
  });

  // === Team ===
  app.get(api.team.list.path, async (req, res) => {
    const members = await storage.getTeamMembers();
    res.json(members);
  });

  // === Messages ===
  app.post(api.messages.create.path, async (req, res) => {
    const message = await storage.createMessage(req.body);
    res.status(201).json(message);
  });

  // === Donations ===
  app.get(api.donations.list.path, async (req, res) => {
    const donations = await storage.getDonations();
    res.json(donations);
  });

  app.post(api.donations.create.path, async (req, res) => {
    const donation = await storage.createDonation(req.body);
    res.status(201).json(donation);
  });

  // === Newsletter ===
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const data = insertNewsletterSubscriptionSchema.parse(req.body);
      const sub = await storage.createNewsletterSubscription(data);
      res.status(201).json(sub);
    } catch (error: any) {
      if (error.code === '23505') { // Unique violation
        return res.status(400).json({ message: "Email already subscribed" });
      }
      res.status(400).json({ message: error.message });
    }
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const team = await storage.getTeamMembers();
  if (team.length === 0) {
    await storage.createTeamMember({
      name: "Victoria Queen",
      role: "Founder & CEO",
      type: "team",
      bio: "Former professional basketball player dedicated to empowering young girls through sports.",
    });
  }
}
