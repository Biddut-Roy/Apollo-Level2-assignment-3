import { TLoginUser } from '../Auth/auth.interface';
import User from '../Auth/auth.model';
import { TCreateBookingServices } from './booking.interface';
import { BookingRequest } from './booking.model';
import { calculateDuration } from './booking.utils';

const getAllBookings = async () => {};
const createBookings = async (
  data: TCreateBookingServices,
  payload: TLoginUser,
) => {
  const { startTime, endTime, facility, date } = data;
  const email = payload.email;
  const userData = await User.findOne({ email });
  const user = userData?._id;
  const duration = calculateDuration(startTime, endTime);
  const payableAmount = duration * 20;

  const setData = {
    facility,
    date,
    startTime,
    endTime,
    user,
    payableAmount,
  };

  const result = await BookingRequest.create(setData);

  return result;
};

export const BookingServices = { createBookings };
