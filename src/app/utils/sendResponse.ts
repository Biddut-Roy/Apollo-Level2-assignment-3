import { Response } from 'express';

interface ResponseData<T> {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
  token?: string;
}

export const sendResponse = <T>(res: Response, data: ResponseData<T>) => {
  const response: {
    success: boolean;
    statusCode: number;
    message?: string;
    token?: string;
    data: T;
  } = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  };

  if (data.token) {
    response.token = data.token;
  }

  res.status(data.statusCode).json(response);
};
