# Overview

This is a full-stack personal training and fitness consulting website built with React/TypeScript frontend and Express.js backend. The application is designed for "Training Time," a Catalan fitness business targeting busy professionals (particularly men over 40) who want personalized training and nutrition plans. The site features a modern, professional design with service offerings, testimonials, client transformations, and contact functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client uses **React with TypeScript** and follows a modern component-based architecture:
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with TypeScript support

The frontend structure follows a clear separation:
- `/pages` - Route components (Home, Services, About, Contact)
- `/components` - Reusable UI components organized by layout and sections
- `/hooks` - Custom React hooks for mobile detection and toast notifications
- `/lib` - Utility functions and query client configuration

## Backend Architecture
The server uses **Express.js** with TypeScript in ESM mode:
- **API Design**: RESTful endpoints for contacts, testimonials, and transformations
- **Error Handling**: Global error middleware with structured error responses
- **Request Logging**: Custom middleware for API request tracking
- **Development Setup**: Vite integration for SSR and HMR during development

## Data Layer
**Drizzle ORM** is configured for PostgreSQL with a clear schema design:
- **Database**: PostgreSQL (configured via Neon Database serverless)
- **Schema**: Type-safe database schemas with Zod validation
- **Storage Pattern**: Interface-based storage layer with in-memory implementation for development
- **Models**: Users, Contacts, Testimonials, and Transformations with proper relationships

The storage layer uses an interface pattern allowing for easy swapping between implementations (currently using MemStorage for development).

## Development Experience
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared schemas
- **Hot Reload**: Vite development server with Express integration
- **Path Mapping**: Organized imports with @ aliases for clean code structure
- **Build Process**: Separate build processes for client (Vite) and server (esbuild)

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless** - PostgreSQL database connection (Neon Database)
- **drizzle-orm** & **drizzle-kit** - Type-safe ORM and database toolkit
- **express** - Node.js web framework
- **@tanstack/react-query** - Server state management
- **wouter** - Lightweight React router

## UI and Styling
- **@radix-ui/** components - Accessible UI primitives (dialog, select, accordion, etc.)
- **tailwindcss** - Utility-first CSS framework
- **class-variance-authority** - Component variant utilities
- **lucide-react** - Icon library

## Form and Validation
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Form validation resolvers
- **zod** - Schema validation library
- **drizzle-zod** - Zod integration for Drizzle schemas

## Development Tools
- **vite** - Build tool and development server
- **typescript** - Type system
- **@replit/vite-plugin-runtime-error-modal** - Development error handling
- **tsx** - TypeScript execution for Node.js

The application is designed to be deployed on platforms like Replit with easy environment variable configuration for the database connection.