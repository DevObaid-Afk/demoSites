import helmet from 'helmet';
import cors from 'cors';
import { corsOptions } from '../config/cors.js';
import { sanitizeRequestBody } from './sanitizeRequest.js';

export function applySecurityMiddleware(app) {
  app.disable('x-powered-by');
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' }
    })
  );
  app.use(cors(corsOptions));
  app.use(sanitizeRequestBody);
}
