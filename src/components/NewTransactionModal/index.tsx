import Modal from 'react-modal';

Modal.setAppElement('#root');

interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionsModalProps) {
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
  );
}