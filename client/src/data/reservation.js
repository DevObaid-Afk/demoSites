export const bookingTypes = [
  { value: 'table', label: 'Table', description: 'Dining room, terrace, or chef counter.' },
  { value: 'room', label: 'Room', description: 'Boutique stay with breakfast options.' },
  { value: 'chef-table-stay', label: 'Chef Table Stay', description: 'Suite, tasting menu, and wine pairing.' },
  { value: 'private-dining', label: 'Private Dining', description: 'Events, celebrations, and business dinners.' }
];

export const timeSlots = [
  '07:30',
  '08:00',
  '08:30',
  '12:00',
  '12:30',
  '13:00',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00'
];

export const guestOptions = Array.from({ length: 16 }, (_, index) => index + 1);

export const initialReservationForm = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  bookingType: 'table',
  message: ''
};
