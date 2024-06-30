import { JwtPayload } from 'jsonwebtoken';
import { TLoginUser } from '../Auth/auth.interface';
import { TCreateBookingServices } from './booking.interface';
import { BookingRequest } from './booking.model';
import { calculateDuration } from './booking.utils';
import AppError from '../../errors/appError';
import httpStatus from 'http-status';
import mongoose from 'mongoose';
import User from '../Auth/auth.model';

const getAllBookings = async () => {
  const result = await BookingRequest.find({
    isBooked: { $ne: 'canceled' },
  });
  return result;
};

const getUserBooking = async (id: string) => {
  const result = await BookingRequest.findOne({
    user: id,
    isBooked: { $ne: 'canceled' },
  }).populate('facility');

  return result;
};

const createBookings = async (
  data: TCreateBookingServices,
  email: JwtPayload,
) => {
  const { startTime, endTime, facility, date } = data;

  const existingFacility = await BookingRequest.findOne({ facility, email });

  if (existingFacility) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      'Facility with the same data already exists',
    );
  }

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

const deleteBookingByID = async (id: string) => {
  const result = await BookingRequest.findByIdAndUpdate(
    id,
    { isBooked: 'canceled' },
    { new: true },
  );
  return result;
};

export const BookingServices = {
  createBookings,
  getAllBookings,
  deleteBookingByID,
  getUserBooking,
};
