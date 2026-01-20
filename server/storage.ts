import {  galleryItems, teamMembers, messages, donations, partners, newsletterSubscriptions,posts,
          type InsertPost,
          type Post, type GalleryItem, type InsertGalleryItem,
  type TeamMember, type InsertTeamMember,
  type Message, type InsertMessage,
  type Donation, type InsertDonation,
  type Partner, type InsertPartner,
  type NewsletterSubscription, type InsertNewsletterSubscription
} from "../shared/schema.js";
import { db } from "./db.js";
import { eq, desc } from "drizzle-orm";

export interface IStorage {

  // Posts

  getPosts(): Promise<Post[]>;
    getPost(id: number): Promise<Post | undefined>;
    createPost(post: InsertPost & { excerpt: string }): Promise<Post>;
    updatePost(id: number, updates: Partial<InsertPost> & { excerpt?: string }): Promise<Post>;
    deletePost(id: number): Promise<void>;

  // Gallery
  getGalleryItems(): Promise<GalleryItem[]>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
  deleteGalleryItem(id: number): Promise<void>;

  // Team
  getTeamMembers(): Promise<TeamMember[]>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
  deleteTeamMember(id: number): Promise<void>;

  // Messages
  createMessage(message: InsertMessage): Promise<Message>;

  // Donations
  getDonations(): Promise<Donation[]>;
  createDonation(donation: InsertDonation): Promise<Donation>;

  // Newsletter
  createNewsletterSubscription(sub: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
}

export class DatabaseStorage implements IStorage {

  // Posts

  async getPosts(): Promise<Post[]> {
    return await db.select().from(posts).orderBy(desc(posts.createdAt));
  }

  async getPost(id: number): Promise<Post | undefined> {
    const [post] = await db.select().from(posts).where(eq(posts.id, id));
    return post;
  }

  async createPost(post: InsertPost & { excerpt: string }): Promise<Post> {
    const [newPost] = await db.insert(posts).values(post).returning();
    return newPost;
  }

  async updatePost(id: number, updates: Partial<InsertPost> & { excerpt?: string }): Promise<Post> {
    const [updated] = await db.update(posts)
      .set(updates)
      .where(eq(posts.id, id))
      .returning();
    return updated;
  }

  async deletePost(id: number): Promise<void> {
    await db.delete(posts).where(eq(posts.id, id));
  }

  // Gallery
  async getGalleryItems(): Promise<GalleryItem[]> {
    return await db.select().from(galleryItems).orderBy(desc(galleryItems.createdAt));
  }

  async createGalleryItem(insertItem: InsertGalleryItem): Promise<GalleryItem> {
    const [item] = await db.insert(galleryItems).values(insertItem).returning();
    return item;
  }

  async deleteGalleryItem(id: number): Promise<void> {
    await db.delete(galleryItems).where(eq(galleryItems.id, id));
  }

  // Team
  async getTeamMembers(): Promise<TeamMember[]> {
    return await db.select().from(teamMembers);
  }

  async createTeamMember(insertMember: InsertTeamMember): Promise<TeamMember> {
    const [member] = await db.insert(teamMembers).values(insertMember).returning();
    return member;
  }

  async deleteTeamMember(id: number): Promise<void> {
    await db.delete(teamMembers).where(eq(teamMembers.id, id));
  }

  // Messages
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }

  // Donations
  async getDonations(): Promise<Donation[]> {
    return await db.select().from(donations).orderBy(desc(donations.createdAt));
  }

  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const [donation] = await db.insert(donations).values(insertDonation).returning();
    return donation;
  }

  // Newsletter
  async createNewsletterSubscription(insertSub: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const [sub] = await db.insert(newsletterSubscriptions).values(insertSub).returning();
    return sub;
  }
}

export const storage = new DatabaseStorage();
