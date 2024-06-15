import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { FacilityRoutes } from '../modules/Facility/facility.route';
import { CheckRoutes } from '../modules/check/check.route';

const router = Router();

const modelRoute = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/facility',
    route: FacilityRoutes,
  },
  {
    path: '/check-availability',
    route: CheckRoutes,
  },
];

modelRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
