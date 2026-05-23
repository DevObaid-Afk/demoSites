import { Router } from 'express';
import { sendContactMessage } from '../controllers/contactController.js';
import { contactLimiter } from '../middleware/rateLimiters.js';
import { validateBody } from '../middleware/validate.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { sanitizeContactPayload, validateContactPayload } from '../validators/contactValidator.js';

const router = Router();

router.post(
  '/',
  contactLimiter,
  validateBody({ sanitize: sanitizeContactPayload, validate: validateContactPayload }),
  asyncHandler(sendContactMessage)
);

export default router;
