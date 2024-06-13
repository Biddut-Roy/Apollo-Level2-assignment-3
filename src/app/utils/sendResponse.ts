import { Response } from 'express';

interface ResponseData<T> {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
}

export const sendResponse = <T>(
  res: Response,
  data: ResponseData<T>,
  token?: string, // Make token optional in the function signature
) => {
  const response: {
    success: boolean;
    statusCode: number;
    message?: string;
    data: T;
    token?: string;
  } = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  };

  if (token) {
    response.token = token;
  }

  res.status(data.statusCode).json(response);
};
