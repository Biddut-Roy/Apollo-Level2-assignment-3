import { z } from 'zod';

const createFacilitySchemaZod = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    pricePerHour: z.number().positive(),
    location: z.string(),
  }),
});

const updateFacilitySchemaZod = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    pricePerHour: z.number().positive().optional(),
    location: z.string().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const facilityValidationZod = {
  createFacilitySchemaZod,
  updateFacilitySchemaZod,
};
