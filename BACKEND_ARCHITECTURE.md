# Backend Architecture

## Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer

## Folder Structure

```txt
server/src/
  config/
    cors.js
    env.js
  controllers/
    contactController.js
    reservationController.js
  middleware/
    errorHandler.js
    notFound.js
    rateLimiters.js
    sanitizeRequest.js
    security.js
    validate.js
  models/
    ContactMessage.js
    Reservation.js
  routes/
    contact.js
    reservations.js
  services/
    contactMessages.js
    database.js
    email.js
    whatsapp.js
  utils/
    asyncHandler.js
    sanitize.js
  validators/
    contactValidator.js
    reservationValidator.js
  app.js
  index.js
```

## Request Flow

```txt
Client
  -> Express JSON parser
  -> Security middleware
  -> Global rate limit
  -> Route-specific rate limit
  -> Validation middleware
  -> Controller
  -> Service layer
  -> Mongoose / email / WhatsApp
  -> Error handler
```

## APIs

### Reservations

`POST /api/reservations`

Creates a pending reservation request for a table, room, chef-table stay, or private dining.

Layers:

- `reservationLimiter`
- `validateBody`
- `sanitizeReservationPayload`
- `validateReservationPayload`
- `createReservation`
- `persistReservation`
- `sendReservationEmail`
- `buildWhatsAppLink`

### Contact

`POST /api/contact`

Stores a contact enquiry and sends an email notification when mail config is present.

Layers:

- `contactLimiter`
- `validateBody`
- `sanitizeContactPayload`
- `validateContactPayload`
- `sendContactMessage`
- `persistContactMessage`
- `sendContactEmail`

## Security

- `helmet` sets secure HTTP headers.
- `app.disable('x-powered-by')` hides Express fingerprinting.
- CORS is restricted via `CLIENT_ORIGIN`.
- Global rate limiting protects the whole API.
- Route-specific rate limiting protects high-abuse forms.
- Request body size is capped at `32kb`.
- Body strings are sanitized before validation.
- Validators cap field lengths and reject invalid values.
- Error responses avoid leaking stack traces.

## Environment Config

Environment variables are centralized in `config/env.js`.

Required for production:

- `NODE_ENV=production`
- `PORT`
- `CLIENT_ORIGIN`
- `MONGODB_URI`
- `MAIL_HOST`
- `MAIL_PORT`
- `MAIL_USER`
- `MAIL_PASS`
- `MAIL_FROM`
- `RESERVATION_TO`
- `CONTACT_TO`

## MongoDB Models

### Reservation

Fields include guest identity, date, time, guest count, booking type, message, status, source, and WhatsApp URL.

Indexes:

- `email`
- `date`
- `bookingType`
- compound `date + time + bookingType`

### ContactMessage

Fields include name, email, subject, message, source, and status.

Indexes:

- `email`
- `status`

## Email Integration

Email is handled by `services/email.js`.

- Safe no-op when mail config is missing.
- Reservation emails include date, time, guests, notes, and WhatsApp handoff.
- Contact emails use `replyTo` so staff can respond directly.

## Scalability Notes

- Controllers stay thin.
- Validation is reusable middleware.
- Persistence and integrations live in services.
- MongoDB can be swapped or extended without changing route handlers.
- Availability checks, admin dashboards, and confirmation workflows can be added as separate route/controller modules.
