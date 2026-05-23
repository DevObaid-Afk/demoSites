import { normalizeEmail, sanitizeString } from '../utils/sanitize.js';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function sanitizeContactPayload(payload = {}) {
  return {
    name: sanitizeString(payload.name, 120),
    email: normalizeEmail(payload.email),
    subject: sanitizeString(payload.subject, 160),
    message: sanitizeString(payload.message, 1200),
    source: sanitizeString(payload.source || 'website', 40)
  };
}

export function validateContactPayload(message) {
  const errors = {};

  if (!message.name) errors.name = 'Name is required.';
  if (!emailPattern.test(message.email)) errors.email = 'A valid email address is required.';
  if (!message.message) errors.message = 'Message is required.';
  if (message.message.length < 10) errors.message = 'Message must be at least 10 characters.';

  return errors;
}
