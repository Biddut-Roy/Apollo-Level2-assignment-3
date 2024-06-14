import express from 'express';
import { FacilityControllers } from './facility.controller';

const router = express.Router();

router.get('/', FacilityControllers.getAllFacility);
router.post('/', FacilityControllers.createFacility);

router.put('/:id', FacilityControllers.updateFacility);

router.delete('/:id', FacilityControllers.deleteFacility);

export const FacilityRoutes = router;
