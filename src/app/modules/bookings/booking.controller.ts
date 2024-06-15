import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { BookingServices } from './booking.service';

const getAllBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookings();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bookings retrieved successfully',
    data: result,
  });
});
const getUserBookings = catchAsync(async (req, res) => {
  const id = req.user.userID;
  const result = await BookingServices.getUserBooking(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bookings retrieved successfully',
    data: result,
  });
});

const createBookings = catchAsync(async (req, res) => {
  const email = req?.user?.email;

  const result = await BookingServices.createBookings(req?.body, email);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking created successfully',
    data: result,
  });
});

const deleteBooking = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await BookingServices.deleteBookingByID(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking cancelled successfully',
    data: result,
  });
});

export const BookingsControllers = {
  getAllBookings,
  getUserBookings,
  createBookings,
  deleteBooking,
};
