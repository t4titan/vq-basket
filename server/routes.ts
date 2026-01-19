import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.js";
import { api } from "../shared/routes.js";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

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
