# Victoria's Queens Basketball Foundation Website

## Overview

A modern, responsive nonprofit website for Victoria's Queens Basketball Foundation - an organization empowering young women through basketball, education, and community service. The platform is content-driven with donation capabilities, featuring a React frontend with TypeScript, Express backend, and PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Shadcn/ui (Radix primitives with custom styling)
- **Animations**: Framer Motion for page transitions and scroll effects
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Design**: RESTful endpoints defined in `shared/routes.ts`
- **Build Tool**: Custom esbuild script for production bundling

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Drizzle Kit (`db:push` command)
- **Session Storage**: PostgreSQL-backed sessions via `connect-pg-simple`

### Authentication
- **Provider**: Replit Auth (OpenID Connect)
- **Session Management**: Express sessions with PostgreSQL store
- **User Storage**: Dedicated users table with auth integration
- **Protected Routes**: Admin panel requires authentication

### Key Data Models
- **Posts**: Blog/news content with publish workflow
- **Events**: Community events with dates and locations
- **Gallery**: Image collection with categories
- **Team Members**: Staff and ambassadors
- **Messages**: Contact form submissions
- **Donations**: Donation records with amounts and status

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/   # UI components
│       ├── hooks/        # React Query hooks for data fetching
│       ├── pages/        # Route components
│       └── lib/          # Utilities
├── server/           # Express backend
│   ├── routes.ts     # API endpoints
│   ├── storage.ts    # Database operations
│   └── replit_integrations/auth/  # Auth setup
├── shared/           # Shared between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions with Zod schemas
└── migrations/       # Database migrations
```

### Design System
- **Primary Color**: #d85023 (HSL 15 72% 49%)
- **Typography**: DM Sans (body), Playfair Display (headings), Outfit (display)
- **Component Library**: Shadcn/ui New York style variant

## External Dependencies

### Database
- PostgreSQL (required, connection via `DATABASE_URL` environment variable)
- Drizzle ORM for type-safe queries
- connect-pg-simple for session storage

### Authentication
- Replit Auth (OpenID Connect)
- Requires `ISSUER_URL`, `REPL_ID`, and `SESSION_SECRET` environment variables

### Frontend Libraries
- TanStack React Query for data fetching
- Framer Motion for animations
- Embla Carousel for image carousels
- date-fns for date formatting
- Lucide React for icons

### Build & Development
- Vite for frontend development and bundling
- esbuild for server bundling
- TypeScript for type safety across the stack