import { 
  type User, 
  type InsertUser, 
  type Contact, 
  type InsertContact, 
  type Testimonial, 
  type InsertTestimonial,
  type Transformation,
  type InsertTransformation
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  markContactAsRead(id: string): Promise<boolean>;
  
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  getTransformations(): Promise<Transformation[]>;
  createTransformation(transformation: InsertTransformation): Promise<Transformation>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private testimonials: Map<string, Testimonial>;
  private transformations: Map<string, Transformation>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.testimonials = new Map();
    this.transformations = new Map();
    
    // Initialize with some sample testimonials
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample testimonials
    const sampleTestimonials: Testimonial[] = [
      {
        id: randomUUID(),
        name: "Manuel Ortega",
        content: "No sóc de gimnasos, per això aquest mètode em va encaixar perfecte.",
        rating: "5",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Javier Morales", 
        content: "No pensava que aguantaria, però m'ho van posar molt fàcil.",
        rating: "5",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Andrés Castillo",
        content: "Em van treure la idea que menjar sa és una tortura!!",
        rating: "5", 
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        isActive: true,
        createdAt: new Date(),
      },
    ];

    sampleTestimonials.forEach(testimonial => {
      this.testimonials.set(testimonial.id, testimonial);
    });

    // Sample transformations
    const sampleTransformations: Transformation[] = [
      {
        id: randomUUID(),
        clientName: "Marc R.",
        result: "-12kg en 3 mesos",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        clientName: "Jordi M.",
        result: "+8kg múscul, -6kg greix",
        imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        clientName: "Pere S.",
        result: "Energia recuperada, -15kg",
        imageUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        clientName: "Àlex T.",
        result: "Millor forma als 45 que als 30",
        imageUrl: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        clientName: "Carles V.",
        result: "Dolors d'esquena eliminats",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        isActive: true,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        clientName: "Miquel L.",
        result: "Rutina sostenible, -10kg",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        isActive: true,
        createdAt: new Date(),
      },
    ];

    sampleTransformations.forEach(transformation => {
      this.transformations.set(transformation.id, transformation);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
      isRead: false,
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async markContactAsRead(id: string): Promise<boolean> {
    const contact = this.contacts.get(id);
    if (contact) {
      contact.isRead = true;
      this.contacts.set(id, contact);
      return true;
    }
    return false;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values())
      .filter(t => t.isActive)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = {
      ...insertTestimonial,
      id,
      createdAt: new Date(),
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getTransformations(): Promise<Transformation[]> {
    return Array.from(this.transformations.values())
      .filter(t => t.isActive)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createTransformation(insertTransformation: InsertTransformation): Promise<Transformation> {
    const id = randomUUID();
    const transformation: Transformation = {
      ...insertTransformation,
      id,
      createdAt: new Date(),
    };
    this.transformations.set(id, transformation);
    return transformation;
  }
}

export const storage = new MemStorage();
