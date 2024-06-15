import { Router } from 'express';
import { CheckingControllers } from './check.controller';

const router = Router();

router.get('', CheckingControllers.getAllChecking);

export const CheckRoutes = router;
