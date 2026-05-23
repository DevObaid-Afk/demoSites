import nodemailer from 'nodemailer';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

function hasMailConfig() {
  return Boolean(env.mail.host && env.mail.user && env.mail.pass);
}

function createTransport() {
  return nodemailer.createTransport({
    host: env.mail.host,
    port: env.mail.port,
    secure: env.mail.port === 465,
    auth: {
      user: env.mail.user,
      pass: env.mail.pass
    }
  });
}

export async function sendReservationEmail(reservation) {
  if (!hasMailConfig()) {
    logger.warn('Email not configured; reservation email skipped.', { email: reservation.email });
    return;
  }

  await createTransport().sendMail({
    from: env.mail.from,
    to: env.mail.reservationTo,
    subject: `New ${reservation.bookingType} reservation from ${reservation.name}`,
    text: [
      `Name: ${reservation.name}`,
      `Email: ${reservation.email}`,
      `Phone: ${reservation.phone}`,
      `Date/time: ${reservation.date} ${reservation.time}`,
      `Guests: ${reservation.guests}`,
      `Notes: ${reservation.message || 'None'}`,
      `WhatsApp handoff: ${reservation.whatsappUrl || 'Not generated'}`
    ].join('\n')
  });
}

export async function sendContactEmail(message) {
  if (!hasMailConfig()) {
    logger.warn('Email not configured; contact email skipped.', { email: message.email });
    return;
  }

  await createTransport().sendMail({
    from: env.mail.from,
    to: env.mail.contactTo,
    replyTo: message.email,
    subject: `Website enquiry: ${message.subject || 'Lumiere contact'}`,
    text: `${message.name} <${message.email}>\n\n${message.message}`
  });
}
