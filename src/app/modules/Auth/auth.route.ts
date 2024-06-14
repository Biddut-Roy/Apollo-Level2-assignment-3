import express from 'express';
import { AuthControllers } from './auth.controller';
import { authValidationZod } from './auth.validation';
import validationRequest from '../../middleware/validationRequest';

const router = express.Router();

router.post(
  '/signup',
  validationRequest(authValidationZod.createUserSchemaZOD),
  AuthControllers.SignupUser,
);

router.post(
  '/login',
  validationRequest(authValidationZod.loginValidationSchemaZOD),
  AuthControllers.loginUser,
);

export const AuthRoutes = router;
