# Victoria's Queens Basketball Foundation (VQBF)

## Current Project Structure

```
├── client/                 # React frontend (TypeScript)
│   ├── src/
│   │   ├── components/     # UI components (Shadcn/ui)
│   │   │   ├── ui/         # Base UI primitives
│   │   │   ├── seo/        # SEO components
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── PostCard.tsx
│   │   │   └── ...
│   │   ├── hooks/          # React Query hooks
│   │   │   ├── use-toast.ts
│   │   │   └── ...
│   │   ├── lib/            # Utilities (QueryClient, etc.)
│   │   ├── pages/          # Page components (Wouter routes)
│   │   │   ├── Home.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── AdminLogin.tsx
│   │   │   ├── Blogs.tsx
│   │   │   └── ...
│   │   ├── App.tsx         # Main App entry & Routing
│   │   └── main.tsx        # Entry point
├── server/                 # Express backend
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API endpoints
│   ├── storage.ts          # Database operations
│   └── vite.ts             # Vite integration for development
├── shared/                 # Shared code between frontend & backend
│   ├── schema.ts           # Drizzle database schema & Zod types
│   └── routes.ts           # Shared route constants
├── attached_assets/        # Project media assets
├── replit.md               # Project documentation
└── package.json            # Dependencies & Scripts
```
