import express from 'express';
import morgan from 'morgan';
import reservationRoutes from './routes/reservations.js';
import contactRoutes from './routes/contact.js';
import { errorHandler } from './middleware/errorHandler.js';
import { globalLimiter } from './middleware/rateLimiters.js';
import { applySecurityMiddleware } from './middleware/security.js';
import { notFound } from './middleware/notFound.js';
import { isProduction } from './config/env.js';

const app = express();

app.use(express.json({ limit: '32kb' }));
applySecurityMiddleware(app);
app.use(morgan(isProduction() ? 'combined' : 'dev'));
app.use(globalLimiter);

app.get('/api/health', (_request, response) => {
  response.json({ ok: true, service: 'lumiere-api' });
});

app.use('/api/reservations', reservationRoutes);
app.use('/api/contact', contactRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;
