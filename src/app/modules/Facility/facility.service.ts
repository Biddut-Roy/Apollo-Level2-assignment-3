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

const UpdateFacility = async (id: string, payload: TFacility) => {
  const result = await Facility.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const DeleteFacility = async (payload: TFacility) => {};

export const FacilityServices = {
  GetAllFacilities,
  CreateFacility,
  UpdateFacility,
  DeleteFacility,
};
