import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import config from '../../config';
import { TLoginUser } from './auth.interface';

const SignupUser = async (payload: TLoginUser) => {};

const loginUser = async (payload: TLoginUser) => {};

export const AuthServices = {
  SignupUser,
  loginUser,
};
