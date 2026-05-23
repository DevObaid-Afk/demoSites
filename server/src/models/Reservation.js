import mongoose from 'mongoose';

export const bookingTypes = ['table', 'room', 'chef-table-stay', 'private-dining'];
export const reservationStatuses = ['pending', 'confirmed', 'cancelled'];

const reservationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254, index: true },
    phone: { type: String, required: true, trim: true, maxlength: 32 },
    date: { type: String, required: true, index: true },
    time: { type: String, required: true },
    guests: { type: Number, required: true, min: 1, max: 16 },
    bookingType: { type: String, required: true, enum: bookingTypes, index: true },
    message: { type: String, trim: true, maxlength: 600 },
    status: { type: String, enum: reservationStatuses, default: 'pending', index: true },
    source: { type: String, default: 'website' },
    whatsappUrl: String
  },
  { timestamps: true }
);

reservationSchema.index({ date: 1, time: 1, bookingType: 1 });

export const Reservation = mongoose.models.Reservation || mongoose.model('Reservation', reservationSchema);
