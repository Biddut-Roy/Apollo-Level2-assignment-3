import { TCreateBookingServices } from './booking.interface';

const getAllBookings = async () => {};
const createBookings = async (data: TCreateBookingServices) => {
  console.log(data);
};

export const BookingServices = { getAllBookings, createBookings };
