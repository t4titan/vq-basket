import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, registerAuthRoutes } from "./replit_integrations/auth";
import { api } from "@shared/routes";
import { z } from "zod";
import { insertPostSchema, insertEventSchema, insertTeamMemberSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Setup Auth
  await setupAuth(app);
  registerAuthRoutes(app);

  // === Posts ===
  app.get(api.posts.list.path, async (req, res) => {
    const published = req.query.published === 'true';
    const posts = await storage.getPosts(published);
    res.json(posts);
  });

  app.get(api.posts.get.path, async (req, res) => {
    const post = await storage.getPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  });

  app.post(api.posts.create.path, async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    try {
      const input = insertPostSchema.parse(req.body);
      const post = await storage.createPost(input);
      res.status(201).json(post);
    } catch (e) {
      if (e instanceof z.ZodError) {
        return res.status(400).json(e.errors);
      }
      throw e;
    }
  });

  app.put(api.posts.update.path, async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    try {
      const input = insertPostSchema.partial().parse(req.body);
      const post = await storage.updatePost(Number(req.params.id), input);
      res.json(post);
    } catch (e) {
      if (e instanceof z.ZodError) {
        return res.status(400).json(e.errors);
      }
      throw e;
    }
  });

  app.delete(api.posts.delete.path, async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    await storage.deletePost(Number(req.params.id));
    res.sendStatus(204);
  });

  // === Events ===
  app.get(api.events.list.path, async (req, res) => {
    const events = await storage.getEvents();
    res.json(events);
  });

  app.post(api.events.create.path, async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    try {
      const input = insertEventSchema.parse({
        ...req.body,
        date: new Date(req.body.date)
      });
      const event = await storage.createEvent(input);
      res.status(201).json(event);
    } catch (e) {
      if (e instanceof z.ZodError) {
        return res.status(400).json(e.errors);
      }
      throw e;
    }
  });

  app.delete(api.events.delete.path, async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    await storage.deleteEvent(Number(req.params.id));
    res.sendStatus(204);
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
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const donations = await storage.getDonations();
    res.json(donations);
  });

  app.post(api.donations.create.path, async (req, res) => {
    const donation = await storage.createDonation(req.body);
    res.status(201).json(donation);
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const posts = await storage.getPosts();
  if (posts.length === 0) {
    await storage.createPost({
      title: "Welcome to our new website",
      slug: "welcome-new-website",
      content: "We are excited to launch our new platform to connect with our community and supporters.",
      summary: "Launching the Victoria’s Queens Basketball Foundation digital presence.",
      authorId: "admin",
      published: true,
      publishedAt: new Date(),
    });
  }

  const events = await storage.getEvents();
  if (events.length === 0) {
    await storage.createEvent({
      title: "Annual Charity Basketball Tournament",
      description: "Join us for a day of fun, competition, and community building.",
      date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days from now
      location: "City Sports Center",
    });
  }

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
