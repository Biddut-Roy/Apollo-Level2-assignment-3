import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';

const router = Router();

const modelRoute = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

modelRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
