export function sanitizeString(value, maxLength = 240) {
  return String(value ?? '')
    .replace(/[<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

export function normalizeEmail(value) {
  return sanitizeString(value, 254).toLowerCase();
}

export function normalizeInteger(value, fallback = 1) {
  const number = Number(value);
  return Number.isInteger(number) ? number : fallback;
}
