import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { BookingServices } from './booking.service';

const getAllBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookings();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Availability checked successfully',
    data: result,
  });
});

const createBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.createBookings(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking created successfully',
    data: result,
  });
});

export const BookingsControllers = {
  getAllBookings,
  createBookings,
};
