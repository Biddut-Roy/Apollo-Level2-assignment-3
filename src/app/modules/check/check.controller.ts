import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { BookingServices } from './check.service';
import moment from 'moment';
import { getStringQueryParam } from './check.constant';

const getAllBookings = catchAsync(async (req, res) => {
  const dateQuery = getStringQueryParam(req.query.date);

  const date: string = dateQuery || moment().format('YYYY-MM-DD');

  const result = await BookingServices.getAllBookings(date);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Availability checked successfully',
    data: result,
  });
});

export const BookingsControllers = {
  getAllBookings,
};
