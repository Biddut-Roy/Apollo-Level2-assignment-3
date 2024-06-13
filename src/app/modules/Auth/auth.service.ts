import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import config from '../../config';
import { TCreateUser, TLoginUser } from './auth.interface';
import User from './auth.model';

const SignupUser = async (payload: TCreateUser) => {
  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: TLoginUser) => {};

export const AuthServices = {
  SignupUser,
  loginUser,
};
