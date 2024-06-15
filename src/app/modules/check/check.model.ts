import { Schema, model } from 'mongoose';
import { TBooking } from './check.interface';

// Define your Booking schema
const bookingSchema = new Schema({
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
});

export const Booking = model<TBooking>('Booking', bookingSchema);
