import { Router } from 'express';
import { BookingsControllers } from './check.controller';

const router = Router();

router.use('', BookingsControllers.getAllBookings);

export const CheckRoutes = router;
