import { WORKING_HOURS } from './check.constant';
import { TBooking } from './check.interface';
import { Booking } from './check.model';

const getAllBookings = async (date: string) => {
  const bookings: TBooking[] = await Booking.find({ date });

  // Function to determine available slots
  const getAvailableSlots = (bookings: any) => {
    let availableSlots = [...WORKING_HOURS];

    bookings.forEach((booking: any) => {
      availableSlots = availableSlots.filter(
        (slot) =>
          !(
            (booking.startTime >= slot.startTime &&
              booking.startTime < slot.endTime) ||
            (booking.endTime > slot.startTime &&
              booking.endTime <= slot.endTime) ||
            (booking.startTime <= slot.startTime &&
              booking.endTime >= slot.endTime)
          ),
      );
    });

    return availableSlots;
  };

  const availableSlots = getAvailableSlots(bookings);

  return availableSlots;
};

export const BookingServices = { getAllBookings };
