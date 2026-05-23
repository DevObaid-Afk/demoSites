# Reservation System Architecture

## Frontend Flow

- `ReservationForm` owns the user-facing booking UI.
- `useReservationForm` owns form state, client validation, API submission, success/error state, and WhatsApp text generation.
- `reservationValidation.js` validates name, email, phone, future date, time, guest count, booking type, and note length.
- `reservation.js` stores booking types, time slots, guest options, and initial values.
- The same form powers both the `/reservation` page and the global reservation modal.

## Backend Flow

```txt
POST /api/reservations
  reservationLimiter
  asyncHandler
  reservationController.createReservation
    sanitizeReservationPayload
    validateReservationPayload
    buildWhatsAppLink
    persistReservation
    sendReservationEmail
  errorHandler
```

## Security Practices

- `helmet` for secure HTTP headers.
- CORS is scoped to `CLIENT_ORIGIN`.
- Global API rate limiting plus stricter reservation-specific rate limiting.
- JSON body limit of `32kb`.
- Input normalization removes angle brackets, trims whitespace, and caps field length.
- API validation returns structured `422` errors without exposing internals.
- Server responses avoid returning full personal reservation details.

## Persistence

- `Reservation` Mongoose model is ready for MongoDB.
- If `MONGODB_URI` is not configured, the API uses an in-memory store for demos.
- Schema indexes date/time/booking type for future availability queries.

## Email Confirmation

- `sendReservationEmail` is wired through Nodemailer.
- Email is skipped safely when mail environment variables are absent.
- Production requires `MAIL_HOST`, `MAIL_PORT`, `MAIL_USER`, `MAIL_PASS`, `MAIL_FROM`, and `RESERVATION_TO`.

## WhatsApp Integration

- The API returns a generated WhatsApp URL for concierge handoff.
- The frontend also provides a direct WhatsApp CTA from the current form values.
- A production WhatsApp Business API integration can replace the URL builder inside `services/whatsapp.js`.
