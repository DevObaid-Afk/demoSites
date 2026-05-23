import { persistReservation } from '../services/database.js';
import { sendReservationEmail } from '../services/email.js';
import { buildWhatsAppLink } from '../services/whatsapp.js';

export async function createReservation(request, response) {
  const reservation = request.validatedBody;
  const whatsappUrl = buildWhatsAppLink(reservation);
  const savedReservation = await persistReservation({ ...reservation, whatsappUrl });
  await sendReservationEmail({ ...reservation, whatsappUrl });

  response.status(201).json({
    message: 'Reservation request received',
    reservation: {
      id: savedReservation.id || savedReservation._id,
      status: savedReservation.status || 'pending',
      date: savedReservation.date,
      time: savedReservation.time,
      bookingType: savedReservation.bookingType
    },
    whatsappUrl
  });
}
