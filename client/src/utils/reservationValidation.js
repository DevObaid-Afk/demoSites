const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\-\s\d]{7,20}$/;

export function getTodayValue() {
  return new Date().toISOString().slice(0, 10);
}

export function validateReservation(values) {
  const errors = {};
  const guestCount = Number(values.guests);

  if (!values.name.trim()) errors.name = 'Full name is required.';
  if (!emailPattern.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (!phonePattern.test(values.phone.trim())) errors.phone = 'Enter a valid phone number.';
  if (!values.date) errors.date = 'Select a reservation date.';
  if (values.date && values.date < getTodayValue()) errors.date = 'Choose today or a future date.';
  if (!values.time) errors.time = 'Select a time.';
  if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 16) errors.guests = 'Choose 1 to 16 guests.';
  if (!values.bookingType) errors.bookingType = 'Choose a booking type.';
  if (values.message.length > 600) errors.message = 'Notes must stay under 600 characters.';

  return errors;
}

export function buildReservationWhatsAppText(values) {
  const label = values.bookingType.replaceAll('-', ' ');
  return encodeURIComponent(
    `Reservation request: ${label} for ${values.guests} guest${Number(values.guests) === 1 ? '' : 's'} on ${values.date || 'preferred date'} at ${values.time || 'preferred time'}.`
  );
}
