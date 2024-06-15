import { ParsedQs } from 'qs';

// Helper function to get a string from query parameter
export const getStringQueryParam = (
  param: string | string[] | ParsedQs | ParsedQs[] | undefined,
): string => {
  if (typeof param === 'string') {
    return param;
  }
  return '';
};
