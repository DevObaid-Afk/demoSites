import dotenv from 'dotenv';

dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 5000),
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  mongoUri: process.env.MONGODB_URI || '',
  mail: {
    host: process.env.MAIL_HOST || '',
    port: Number(process.env.MAIL_PORT || 587),
    user: process.env.MAIL_USER || '',
    pass: process.env.MAIL_PASS || '',
    from: process.env.MAIL_FROM || 'Lumiere Stay <reservations@lumierestay.demo>',
    reservationTo: process.env.RESERVATION_TO || 'reservations@lumierestay.demo',
    contactTo: process.env.CONTACT_TO || process.env.RESERVATION_TO || 'reservations@lumierestay.demo'
  }
};

export function isProduction() {
  return env.nodeEnv === 'production';
}
