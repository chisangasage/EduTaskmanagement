# Task Management Application

## Overview

This is a full-stack task management application built for students to organize and track their academic assignments. The app features a React frontend with TypeScript, an Express.js backend, and PostgreSQL database integration. Users can create, edit, delete, and filter tasks by subject, priority, and status. The application includes backup and recovery functionality to prevent data loss.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built with React 18 and TypeScript, using Vite as the build tool. The application follows a component-based architecture with:

- **UI Framework**: Radix UI components with shadcn/ui styling system and Tailwind CSS for responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Component Structure**: Modular components in `/client/src/components/` with reusable UI primitives in `/client/src/components/ui/`

### Backend Architecture
The server is built with Express.js and follows a layered architecture:

- **API Layer**: RESTful endpoints in `/server/routes.ts` for CRUD operations on tasks and backups
- **Data Access Layer**: Repository pattern implementation in `/server/storage.ts` with TypeScript interfaces
- **Database Layer**: Drizzle ORM for type-safe database interactions with PostgreSQL
- **Middleware**: Request logging, error handling, and JSON parsing

### Data Storage Solutions
The application uses PostgreSQL as the primary database with Drizzle ORM:

- **Schema Definition**: Centralized in `/shared/schema.ts` with Zod validation schemas
- **Database Connection**: Neon serverless PostgreSQL with connection pooling
- **Migrations**: Drizzle Kit handles schema migrations in `/migrations/` directory
- **Type Safety**: Full TypeScript integration from database to frontend

### Authentication and Authorization
Currently, the application includes user schema definitions but authentication is not fully implemented. The database includes a users table with username/password fields, suggesting planned authentication features.

### Key Features Architecture

#### Task Management
- **CRUD Operations**: Full create, read, update, delete functionality for tasks
- **Filtering System**: Multi-criteria filtering by status, subject, priority, and search terms
- **Progress Tracking**: Tasks include progress percentage and status tracking (todo, in_progress, completed, overdue)
- **Due Date Management**: Date-based filtering and overdue task identification

#### Backup and Recovery System
- **Automatic Backups**: Scheduled backup creation using node-cron
- **Manual Backups**: User-initiated backup functionality
- **Data Recovery**: Point-in-time recovery from selected backups with options to replace all data or merge
- **Backup Storage**: JSON-based backup data stored in PostgreSQL

## External Dependencies

### Database
- **Neon PostgreSQL**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database toolkit with migrations support

### UI and Styling
- **Radix UI**: Headless component library for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Pre-built component system built on Radix UI and Tailwind

### Development and Build Tools
- **Vite**: Frontend build tool with hot module replacement
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds

### Utility Libraries
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation and type inference
- **date-fns**: Date manipulation and formatting
- **Wouter**: Lightweight routing library

### Development Environment
- **Replit Integration**: Custom plugins for development banner and error overlay
- **Node Cron**: Task scheduling for automated backups
- **WebSocket Support**: Real-time features via ws library