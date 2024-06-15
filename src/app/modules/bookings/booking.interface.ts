import { Types } from 'mongoose';

export interface TBookingServices {
  facility: Types.ObjectId;
  date: Date;
  startTime: string;
  endTime: string;
  user: Types.ObjectId;
  payableAmount: number;
  isBooked?: string;
}

export interface TCreateBookingServices {
  facility: Types.ObjectId;
  date: Date;
  startTime: string;
  endTime: string;
}
