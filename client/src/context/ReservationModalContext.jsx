import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import ReservationModal from '../components/reservation/ReservationModal.jsx';

const ReservationModalContext = createContext(null);

export function ReservationModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openReservationModal = useCallback(() => setOpen(true), []);
  const closeReservationModal = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ openReservationModal, closeReservationModal }),
    [openReservationModal, closeReservationModal]
  );

  return (
    <ReservationModalContext.Provider value={value}>
      {children}
      <ReservationModal open={open} onClose={closeReservationModal} />
    </ReservationModalContext.Provider>
  );
}

export function useReservationModal() {
  const context = useContext(ReservationModalContext);

  if (!context) {
    throw new Error('useReservationModal must be used inside ReservationModalProvider');
  }

  return context;
}
