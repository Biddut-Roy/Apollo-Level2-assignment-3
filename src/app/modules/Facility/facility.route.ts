import express from 'express';
import { FacilityControllers } from './facility.controller';
import validationRequest from '../../middleware/validationRequest';
import { facilityValidationZod } from './facility.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../Auth/auth.constant';

const router = express.Router();

router.get('/', FacilityControllers.getAllFacility);
router.post(
  '/',
  auth(USER_ROLE.admin),
  validationRequest(facilityValidationZod.createFacilitySchemaZod),
  FacilityControllers.createFacility,
);

router.put(
  '/:id',
  auth(USER_ROLE.admin),
  validationRequest(facilityValidationZod.updateFacilitySchemaZod),
  FacilityControllers.updateFacility,
);

router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  FacilityControllers.deleteFacility,
);

export const FacilityRoutes = router;
