import { z } from 'zod';

const createFacilitySchemaZod = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    pricePerHour: z.number().positive(),
    location: z.string(),
    isDeleted: z.boolean(),
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

const deleteFacilitySchemaZod = z.object({
  body: z.object({
    isDeleted: z.boolean(),
  }),
});

export const facilityValidationZod = {
  createFacilitySchemaZod,
  updateFacilitySchemaZod,
  deleteFacilitySchemaZod,
};
