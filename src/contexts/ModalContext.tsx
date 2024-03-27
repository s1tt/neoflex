import { ReactNode, createContext, useState } from 'react';
import Modal from '../components/modals/Modal';

interface ModalContextProviderProps {
  children: ReactNode;
}

interface ModalContextValue {
  showModal: boolean;
  setShowModalTrue: (content: ReactNode) => void;
  setShowModalFalse: () => void;
}

export const ModalContext = createContext<ModalContextValue | undefined>(
  undefined
);

export const ModalContextProvider = ({
  children
}: ModalContextProviderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const setShowModalTrue = (content: ReactNode) => {
    setShowModal(true);
    setModalContent(content);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModalFalse: () => setShowModal(false),
        setShowModalTrue
      }}
    >
      <Modal>{modalContent}</Modal>
      {children}
    </ModalContext.Provider>
  );
};
