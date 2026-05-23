import { useMemo, useState } from 'react';
import { initialReservationForm } from '../data/reservation.js';
import { buildReservationWhatsAppText, validateReservation } from '../utils/reservationValidation.js';

export function useReservationForm({ onSuccess } = {}) {
  const [values, setValues] = useState(initialReservationForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const whatsAppText = useMemo(() => buildReservationWhatsAppText(values), [values]);

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined, form: undefined }));
  }

  async function submit(event) {
    event.preventDefault();
    const nextErrors = validateReservation(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('invalid');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrors(payload.errors || { form: payload.message || 'Reservation request failed.' });
        setStatus('error');
        return;
      }

      setStatus('sent');
      setValues(initialReservationForm);
      onSuccess?.(payload);
    } catch {
      setErrors({ form: 'Network issue. Please try again or use WhatsApp.' });
      setStatus('error');
    }
  }

  return {
    errors,
    setValues,
    status,
    submit,
    updateField,
    values,
    whatsAppText
  };
}
