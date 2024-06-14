import express from 'express';
import { FacilityControllers } from './facility.controller';
import validationRequest from '../../middleware/validationRequest';
import { facilityValidationZod } from './facility.validation';

const router = express.Router();

router.get('/', FacilityControllers.getAllFacility);
router.post(
  '/',
  validationRequest(facilityValidationZod.createFacilitySchemaZod),
  FacilityControllers.createFacility,
);

router.put(
  '/:id',
  validationRequest(facilityValidationZod.updateFacilitySchemaZod),
  FacilityControllers.updateFacility,
);

router.delete(
  '/:id',
  validationRequest(facilityValidationZod.deleteFacilitySchemaZod),
  FacilityControllers.deleteFacility,
);

export const FacilityRoutes = router;
