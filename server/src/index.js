import app from './app.js';
import { connectDatabase } from './services/database.js';
import { env } from './config/env.js';
import { logger } from './utils/logger.js';

await connectDatabase();

app.listen(env.port, () => {
  logger.info(`Lumiere API running on port ${env.port}`);
});
