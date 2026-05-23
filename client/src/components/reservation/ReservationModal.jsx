import Modal from '../ui/Modal.jsx';
import ReservationForm from './ReservationForm.jsx';

export default function ReservationModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Reserve your visit">
      <ReservationForm onSuccess={() => window.setTimeout(onClose, 1400)} />
    </Modal>
  );
}
