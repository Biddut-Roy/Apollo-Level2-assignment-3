import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { FacilityServices } from './facility.service';

const getAllFacility = catchAsync(async (req, res) => {
  const result = await FacilityServices.GetAllFacilities();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Facility added successfully',
    data: result,
  });
});

const createFacility = catchAsync(async (req, res) => {
  const result = await FacilityServices.CreateFacility(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Facility added successfully',
    data: result,
  });
});

export const FacilityControllers = {
  getAllFacility,
  createFacility,
};
