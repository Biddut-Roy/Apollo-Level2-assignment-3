/* eslint-disable @typescript-eslint/no-explicit-any */

import { TErrorSources, TGenericErrorResponse } from '../interfaces/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  // Extract value within double quotes using regex
  const match = err.message.match(/"([^"]*)"/);
  const field = Object.keys(err.keyValue)[0];
  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `E11000 duplicate key error collection`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: `E11000 duplicate key error collection}`,
    errorSources,
  };
};

export default handleDuplicateError;
