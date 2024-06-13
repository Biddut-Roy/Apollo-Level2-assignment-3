import { Response } from 'express';

interface ResponseData<T> {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
}

export const sendResponse = <T>(res: Response, data: ResponseData<T>) => {
  res.status(data?.statusCode).json({
    success: data?.success,
    statusCode: data?.statusCode,
    message: data?.message,
    data: data?.data,
  });
};
