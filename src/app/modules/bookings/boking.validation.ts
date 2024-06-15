import { z } from 'zod';

const createBookingSchemaZod = z.object({
  body: z.object({
    facility: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
    endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
  }),
});

export const bookingValidationZod = {
  createBookingSchemaZod,
};
