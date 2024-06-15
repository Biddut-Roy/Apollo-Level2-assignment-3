import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';

import moment from 'moment';
import { getStringQueryParam } from './check.utils';
import { CheckingServices } from './check.service';

const getAllChecking = catchAsync(async (req, res) => {
  const dateQuery = getStringQueryParam(req.query.date);

  const date: string = dateQuery || moment().format('YYYY-MM-DD');

  const result = await CheckingServices.getAllChecking(date);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Availability checked successfully',
    data: result,
  });
});

export const CheckingControllers = {
  getAllChecking,
};
