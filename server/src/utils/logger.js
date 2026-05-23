import { isProduction } from '../config/env.js';

export const logger = {
  info(message, meta) {
    if (meta) {
      console.info(message, meta);
      return;
    }
    console.info(message);
  },
  warn(message, meta) {
    if (meta) {
      console.warn(message, meta);
      return;
    }
    console.warn(message);
  },
  error(error) {
    if (isProduction()) {
      console.error(error?.message || error);
      return;
    }
    console.error(error);
  }
};
