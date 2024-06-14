import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import AppError from '../errors/appError';
import { TUserRole } from '../modules/Auth/auth.interface';
import { catchAsync } from '../utils/catchAsync';
import User from '../modules/Auth/auth.model';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // checking if the token is missing
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    // checking if the given token is valid
    const decoded = jwt.verify(
      token.replace('Bearer ', ''),
      config.jwt_access_secret as string,
    ) as JwtPayload;

    const { role, email } = decoded;

    console.log(decoded);

    // select('+password') use this method to  get password hidden model select :0
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You are not authorized  hi!',
      );
    }

    req.user = decoded as JwtPayload;

    // next();
  });
};

export default auth;
