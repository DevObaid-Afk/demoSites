import { Router } from 'express';
import { createReservation } from '../controllers/reservationController.js';
import { reservationLimiter } from '../middleware/rateLimiters.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { validateBody } from '../middleware/validate.js';
import { sanitizeReservationPayload, validateReservationPayload } from '../validators/reservationValidator.js';

const router = Router();

router.post(
  '/',
  reservationLimiter,
  validateBody({ sanitize: sanitizeReservationPayload, validate: validateReservationPayload }),
  asyncHandler(createReservation)
);

export default router;
