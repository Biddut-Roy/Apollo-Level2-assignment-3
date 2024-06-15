import { Schema, model } from 'mongoose';
import { TBookingServices } from './booking.interface';

const bookingRequestSchema = new Schema({
  facility: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Facility',
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  payableAmount: {
    type: Number,
    default: 'confirmed',
  },
  isBooked: {
    type: String,
    required: true,
  },
});

export const BookingRequest = model<TBookingServices>(
  'BookingRequest',
  bookingRequestSchema,
);
