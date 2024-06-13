import config from '../../config';
import { AuthServices } from './auth.service';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import httpStatus from 'http-status';

const SignupUser = catchAsync(async (req, res) => {
  const result = await AuthServices.SignupUser(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User registered successfully',
    data: { result },
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);

  res.cookie('token', result.token, {
    secure: config.NODE_DEV === 'production',
    httpOnly: true,
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User logged in successfully',
    data: {
      result,
    },
  });
});

export const AuthControllers = {
  SignupUser,
  loginUser,
};
