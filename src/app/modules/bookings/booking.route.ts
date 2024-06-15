import { Router } from 'express';
import { BookingsControllers } from './booking.controller';
import validationRequest from '../../middleware/validationRequest';
import { bookingValidationZod } from './boking.validation';

const router = Router();

router.post(
  '',
  validationRequest(bookingValidationZod.createBookingSchemaZod),
  BookingsControllers.createBookings,
);
export const BookingsRoutes = router;
