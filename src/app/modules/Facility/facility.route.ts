import express from 'express';
import { FacilityControllers } from './facility.controller';

const router = express.Router();

router.get('/', FacilityControllers.getAllFacility);
router.post('/', FacilityControllers.createFacility);

router.post('/:id');

export const FacilityRoutes = router;
