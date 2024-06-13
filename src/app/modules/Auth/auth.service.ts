import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import config from '../../config';
import { TLoginUser } from './auth.interface';

const loginUser = async (payload: TLoginUser) => {};

export const AuthServices = {
  loginUser,
};
