import { Router } from 'express';
import { BookingsControllers } from './booking.controller';
import validationRequest from '../../middleware/validationRequest';
import { bookingValidationZod } from './boking.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../Auth/auth.constant';

const router = Router();

router.get('', auth(USER_ROLE.admin), BookingsControllers.getAllBookings);

router.get('/user', auth(USER_ROLE.user), BookingsControllers.getUserBookings);

router.post(
  '',
  auth(USER_ROLE.user),
  validationRequest(bookingValidationZod.createBookingSchemaZod),
  BookingsControllers.createBookings,
);

router.delete('/:id', auth(USER_ROLE.user), BookingsControllers.deleteBooking);
export const BookingsRoutes = router;
