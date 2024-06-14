import { z } from 'zod';

const createUserSchemaZOD = z.object({
  body: z.object({
    name: z.string().nonempty({ message: 'Name is required' }),
    email: z
      .string()
      .email({ message: 'Invalid email address' })
      .nonempty({ message: 'Email is required' }),
    password: z.string().nonempty({ message: 'Password is required' }),
    phone: z.string().nonempty({ message: 'Phone number is required' }),
    role: z.enum(['admin', 'user'], {
      message: "Role must be either 'admin' or 'user'",
    }),
    address: z.string().nonempty({ message: 'Address is required' }),
  }),
});

const loginValidationSchemaZOD = z.object({
  body: z.object({
    email: z.string({ required_error: 'email is required.' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

export const authValidationZod = {
  createUserSchemaZOD,
  loginValidationSchemaZOD,
};
