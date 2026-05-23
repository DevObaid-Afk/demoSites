import { sanitizeString } from '../utils/sanitize.js';

export function sanitizeRequestBody(request, _response, next) {
  if (request.body && typeof request.body === 'object' && !Array.isArray(request.body)) {
    request.body = sanitizeObject(request.body);
  }

  next();
}

function sanitizeObject(input) {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => {
      if (typeof value === 'string') return [key, sanitizeString(value, 1000)];
      if (value && typeof value === 'object' && !Array.isArray(value)) return [key, sanitizeObject(value)];
      return [key, value];
    })
  );
}
