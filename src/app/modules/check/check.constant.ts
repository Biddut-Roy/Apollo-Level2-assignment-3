// Define available working hours
export const WORKING_HOURS = [
  { startTime: '08:00', endTime: '10:00' },
  { startTime: '10:00', endTime: '12:00' },
  { startTime: '14:00', endTime: '16:00' },
  { startTime: '16:00', endTime: '18:00' },
];

// Helper function to get a string from query parameter
export const getStringQueryParam = (
  param: string | string[] | ParsedQs | ParsedQs[] | undefined,
): string => {
  if (typeof param === 'string') {
    return param;
  }
  return '';
};
