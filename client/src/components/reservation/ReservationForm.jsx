import { AnimatePresence, motion } from 'framer-motion';
import { FaCheck, FaWhatsapp } from 'react-icons/fa6';
import { bookingTypes, guestOptions, timeSlots } from '../../data/reservation.js';
import { getTodayValue } from '../../utils/reservationValidation.js';
import { useReservationForm } from '../../hooks/useReservationForm.js';
import { staggerContainer, staggerItem } from '../../utils/animations.js';
import Button from '../ui/Button.jsx';

export default function ReservationForm({ surface = 'light', onSuccess }) {
  const { errors, status, submit, updateField, values, whatsAppText } = useReservationForm({ onSuccess });
  const isDark = surface === 'dark';
  const fieldClass = `focus-ring h-12 rounded-2xl border px-4 font-medium ${
    isDark ? 'border-white/10 bg-white/[0.06] text-porcelain' : 'border-ink/10 bg-white text-ink'
  }`;
  const labelClass = `grid gap-2 text-sm font-bold ${isDark ? 'text-porcelain/72' : 'text-ink/72'}`;
  const errorClass = isDark ? 'text-champagne' : 'text-wine';

  return (
    <form onSubmit={submit} className="grid gap-4 md:grid-cols-2" noValidate>
      <FormField label="Full name" name="name" value={values.name} onChange={updateField} error={errors.name} className={fieldClass} labelClass={labelClass} errorClass={errorClass} autoComplete="name" />
      <FormField label="Email address" name="email" type="email" value={values.email} onChange={updateField} error={errors.email} className={fieldClass} labelClass={labelClass} errorClass={errorClass} autoComplete="email" />
      <FormField label="Phone number" name="phone" type="tel" value={values.phone} onChange={updateField} error={errors.phone} className={fieldClass} labelClass={labelClass} errorClass={errorClass} autoComplete="tel" />
      <FormField label="Date" name="date" type="date" min={getTodayValue()} value={values.date} onChange={updateField} error={errors.date} className={fieldClass} labelClass={labelClass} errorClass={errorClass} />

      <label className={labelClass}>
        Time
        <select name="time" value={values.time} onChange={updateField} className={fieldClass} aria-invalid={Boolean(errors.time)}>
          <option value="">Select time</option>
          {timeSlots.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
        </select>
        {errors.time && <span className={`text-xs ${errorClass}`}>{errors.time}</span>}
      </label>

      <label className={labelClass}>
        Guests
        <select name="guests" value={values.guests} onChange={updateField} className={fieldClass} aria-invalid={Boolean(errors.guests)}>
          {guestOptions.map((count) => <option key={count} value={count}>{count}</option>)}
        </select>
        {errors.guests && <span className={`text-xs ${errorClass}`}>{errors.guests}</span>}
      </label>

      <fieldset className="grid gap-3 md:col-span-2">
        <legend className={`mb-1 text-sm font-bold ${isDark ? 'text-porcelain/72' : 'text-ink/72'}`}>Table / room selection</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {bookingTypes.map((type) => (
            <label
              key={type.value}
              className={`cursor-pointer rounded-2xl border p-4 transition ${
                values.bookingType === type.value
                  ? 'border-champagne bg-champagne/15'
                  : isDark
                    ? 'border-white/10 bg-white/[0.04] hover:border-champagne/35'
                    : 'border-ink/10 bg-porcelain hover:border-champagne/55'
              }`}
            >
              <input className="sr-only" type="radio" name="bookingType" value={type.value} checked={values.bookingType === type.value} onChange={updateField} />
              <span className={`block font-display text-2xl font-semibold ${isDark ? 'text-porcelain' : 'text-ink'}`}>{type.label}</span>
              <span className={`mt-1 block text-sm leading-6 ${isDark ? 'text-porcelain/62' : 'text-ink/62'}`}>{type.description}</span>
            </label>
          ))}
        </div>
        {errors.bookingType && <span className={`text-xs ${errorClass}`}>{errors.bookingType}</span>}
      </fieldset>

      <label className={`${labelClass} md:col-span-2`}>
        Notes
        <textarea name="message" rows="5" value={values.message} onChange={updateField} className={`${fieldClass} h-auto p-4`} placeholder="Dietary needs, occasion, accessibility needs, room preferences..." maxLength="600" />
        {errors.message && <span className={`text-xs ${errorClass}`}>{errors.message}</span>}
      </label>

      <div className="flex flex-col gap-3 md:col-span-2 sm:flex-row">
        <Button type="submit" variant={isDark ? 'primary' : 'dark'} className="flex-1" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Request booking'}
        </Button>
        <Button href={`https://wa.me/15551234567?text=${whatsAppText}`} className="flex-1" target="_blank" rel="noreferrer">
          <FaWhatsapp /> WhatsApp
        </Button>
      </div>

      <AnimatePresence>
        {status === 'sent' && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`flex items-start gap-3 rounded-2xl p-4 font-semibold md:col-span-2 ${isDark ? 'bg-sage/20 text-porcelain' : 'bg-sage/[0.18] text-ink'}`}
          >
            <motion.span variants={staggerItem} className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sage text-white"><FaCheck /></motion.span>
            <motion.span variants={staggerItem}>Reservation request received. Confirmation email and concierge handoff are ready on the backend.</motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {errors.form && <p className={`rounded-2xl p-4 font-semibold md:col-span-2 ${isDark ? 'bg-wine/30 text-porcelain' : 'bg-wine/[0.14] text-wine'}`}>{errors.form}</p>}
    </form>
  );
}

function FormField({ label, error, labelClass, errorClass, className, ...props }) {
  return (
    <label className={labelClass}>
      {label}
      <input {...props} className={className} aria-invalid={Boolean(error)} />
      {error && <span className={`text-xs ${errorClass}`}>{error}</span>}
    </label>
  );
}
