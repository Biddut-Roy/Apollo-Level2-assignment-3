import httpStatus from 'http-status';
import config from '../../config';
import { AuthServices } from './auth.service';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';

const SignupUser = catchAsync(async (req, res) => {
  const result = await AuthServices.SignupUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in succesfully!',
    data: { result },
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  // const { refreshToken, accessToken, needsPasswordChange } = result;

  // res.cookie('refreshToken', refreshToken, {
  //   secure: config.NODE_DEV === 'production',
  //   httpOnly: true,
  // });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in succesfully!',
    data: {
      // accessToken,
      // needsPasswordChange,
    },
  });
});

export const AuthControllers = {
  SignupUser,
  loginUser,
};
