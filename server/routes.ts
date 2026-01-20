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

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

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
      // Handle not found implies error in storage logic usually, but here checking existence first is safer or catching error
      // storage.updatePost throws if not found? No, returns undefined usually or Drizzle doesn't return. 
      // Simplified for MVP.
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
