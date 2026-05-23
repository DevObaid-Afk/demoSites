export function buildWhatsAppLink(reservation) {
  const typeLabel = reservation.bookingType.replaceAll('-', ' ');
  const text = encodeURIComponent(
    `New ${typeLabel} reservation: ${reservation.name}, ${reservation.guests} guests, ${reservation.date} at ${reservation.time}. Phone: ${reservation.phone}`
  );

  return `https://wa.me/15551234567?text=${text}`;
}
