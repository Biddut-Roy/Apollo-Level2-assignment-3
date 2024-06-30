import httpStatus from 'http-status';
import config from '../../config';
import { TCreateUser, TLoginUser } from './auth.interface';
import User from './auth.model';
import AppError from '../../errors/appError';
import jwt, { JwtPayload } from 'jsonwebtoken';

const SignupUser = async (payload: TCreateUser) => {
  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: TLoginUser) => {
  const { email, password } = payload;

  // select('+password') use this method to  get password hidden model select :0
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new AppError(httpStatus.FORBIDDEN, 'Invalid email or password');
  }
  // Check if the password matches
  const isMatch = await User.isPasswordMatched(password, user.password);
  if (!isMatch) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
  }

  // Generate a token
  const token = jwt.sign(
    { email: user.email, role: user.role, userID: user._id },
    config.jwt_access_secret as string,
    {
      expiresIn: config.jwt_access_expires_in as string,
    },
  );

  console.log(token);

  return {
    user,
    token: token,
  };
};

export const AuthServices = {
  SignupUser,
  loginUser,
};
