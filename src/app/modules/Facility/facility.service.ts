import { TFacility } from './facility.interface';
import { Facility } from './facility.model';

const GetAllFacilities = async () => {
  const result = await Facility.find();
  return result;
};
const CreateFacility = async (payload: TFacility) => {
  const result = await Facility.create(payload);
  return result;
};

const UpdateFacility = async (payload: TFacility) => {};
const DeleteFacility = async (payload: TFacility) => {};

export const FacilityServices = {
  GetAllFacilities,
  CreateFacility,
  UpdateFacility,
  DeleteFacility,
};
