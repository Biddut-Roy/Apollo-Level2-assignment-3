import { TFacility } from './facility.interface';
import { Facility } from './facility.model';

const GetAllFacilities = async () => {
  const result = await Facility.find({ isDeleted: { $ne: true } });
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
const DeleteFacility = async (id: string) => {
  const result = await Facility.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const FacilityServices = {
  GetAllFacilities,
  CreateFacility,
  UpdateFacility,
  DeleteFacility,
};
