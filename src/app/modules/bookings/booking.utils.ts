export const calculateDuration = (startTime: string, endTime: string) => {
  //   const [startHour, startMinute] = startTime.split(':').map(Number);
  //   const [endHour, endMinute] = endTime.split(':').map(Number);

  //   const startTotalMinutes = startHour * 60 + startMinute;
  //   const endTotalMinutes = endHour * 60 + endMinute;

  //   let durationMinutes = endTotalMinutes - startTotalMinutes;

  //   if (durationMinutes < 0) {
  //     durationMinutes += 24 * 60; // Assuming a 24-hour day
  //   }

  //   return durationMinutes / 60;

  const start = new Date(`2000-01-01T${startTime}:00Z`);
  const end = new Date(`2000-01-01T${endTime}:00Z`);

  // Calculate difference in milliseconds
  const durationMs = (end as any) - (start as any);

  // Convert milliseconds to hours
  const durationHours = durationMs / (1000 * 60 * 60);

  return durationHours;
};
