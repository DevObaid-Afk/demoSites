import { bookingTypes } from '../models/Reservation.js';
import { normalizeEmail, normalizeInteger, sanitizeString } from '../utils/sanitize.js';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\-\s\d]{7,20}$/;
const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

export function sanitizeReservationPayload(payload = {}) {
  return {
    name: sanitizeString(payload.name, 120),
    email: normalizeEmail(payload.email),
    phone: sanitizeString(payload.phone, 32),
    date: sanitizeString(payload.date, 10),
    time: sanitizeString(payload.time, 5),
    guests: normalizeInteger(payload.guests, 0),
    bookingType: sanitizeString(payload.bookingType, 40),
    message: sanitizeString(payload.message, 600),
    source: sanitizeString(payload.source || 'website', 40)
  };
}

export function validateReservationPayload(reservation) {
  const errors = {};
  const today = new Date().toISOString().slice(0, 10);

  if (!reservation.name) errors.name = 'Full name is required.';
  if (!emailPattern.test(reservation.email)) errors.email = 'A valid email address is required.';
  if (!phonePattern.test(reservation.phone)) errors.phone = 'A valid phone number is required.';
  if (!datePattern.test(reservation.date)) errors.date = 'A valid reservation date is required.';
  if (reservation.date && reservation.date < today) errors.date = 'Reservation date must be today or later.';
  if (!timePattern.test(reservation.time)) errors.time = 'A valid reservation time is required.';
  if (reservation.guests < 1 || reservation.guests > 16) errors.guests = 'Guest count must be between 1 and 16.';
  if (!bookingTypes.includes(reservation.bookingType)) errors.bookingType = 'Choose a valid table or room option.';
  if (reservation.message.length > 600) errors.message = 'Notes must be 600 characters or fewer.';

  return errors;
}
