import { z } from "zod";

// Frontend-only types - no Drizzle dependencies
export type User = {
  id: string;
  username: string;
  password: string;
};

export type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  createdAt: Date;
  isRead: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  content: string;
  rating: string;
  imageUrl?: string;
  isActive: boolean;
  createdAt: Date;
};

export type Transformation = {
  id: string;
  clientName: string;
  result: string;
  imageUrl?: string;
  isActive: boolean;
  createdAt: Date;
};

// Zod schemas for form validation
export const insertContactSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Email no válido"),
  phone: z.string().min(1, "El teléfono es obligatorio"),
  service: z.string().min(1, "El servicio es obligatorio"),
  message: z.string().optional(),
});

export const insertUserSchema = z.object({
  username: z.string().min(1, "El nombre de usuario es obligatorio"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export const insertTestimonialSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  content: z.string().min(1, "El contenido es obligatorio"),
  rating: z.string().default("5"),
  imageUrl: z.string().optional(),
});

export const insertTransformationSchema = z.object({
  clientName: z.string().min(1, "El nombre del cliente es obligatorio"),
  result: z.string().min(1, "El resultado es obligatorio"),
  imageUrl: z.string().optional(),
});

// Export types for forms
export type InsertContact = z.infer<typeof insertContactSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type InsertTransformation = z.infer<typeof insertTransformationSchema>;