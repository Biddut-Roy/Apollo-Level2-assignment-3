import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { FacilityServices } from './facility.service';

const getAllFacility = catchAsync(async (req, res) => {
  const result = await FacilityServices.GetAllFacilities();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Facilities retrieved successfully',
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

const updateFacility = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await FacilityServices.UpdateFacility(id, req.body);
  console.log(result);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Facility updated successfully',
    data: result,
  });
});

export const FacilityControllers = {
  getAllFacility,
  createFacility,
  updateFacility,
};
