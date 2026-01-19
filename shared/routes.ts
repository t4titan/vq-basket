import { z } from 'zod';
import { 
  insertGalleryItemSchema, 
  galleryItems, 
  insertTeamMemberSchema, 
  teamMembers, 
  insertMessageSchema, 
  messages,
  insertDonationSchema,
  donations
} from './schema.js';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  gallery: {
    list: {
      method: 'GET' as const,
      path: '/api/gallery',
      responses: {
        200: z.array(z.custom<typeof galleryItems.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/gallery',
      input: insertGalleryItemSchema,
      responses: {
        201: z.custom<typeof galleryItems.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    delete: {
      method: 'DELETE' as const,
      path: '/api/gallery/:id',
      responses: {
        204: z.void(),
        404: errorSchemas.notFound,
      },
    },
  },
  team: {
    list: {
      method: 'GET' as const,
      path: '/api/team',
      responses: {
        200: z.array(z.custom<typeof teamMembers.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/team',
      input: insertTeamMemberSchema,
      responses: {
        201: z.custom<typeof teamMembers.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    delete: {
      method: 'DELETE' as const,
      path: '/api/team/:id',
      responses: {
        204: z.void(),
        404: errorSchemas.notFound,
      },
    },
  },
  messages: {
    create: {
      method: 'POST' as const,
      path: '/api/messages',
      input: insertMessageSchema,
      responses: {
        201: z.custom<typeof messages.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
  donations: {
    list: {
      method: 'GET' as const,
      path: '/api/donations',
      responses: {
        200: z.array(z.custom<typeof donations.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/donations',
      input: insertDonationSchema,
      responses: {
        201: z.custom<typeof donations.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
