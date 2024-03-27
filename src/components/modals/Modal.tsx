import React, { useEffect } from 'react';
import { useModal } from '../../hooks/useModal';
import Portal from './Portal';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const { showModal, setShowModalFalse } = useModal();
  useEffect(() => {
    console.log(showModal);
  }, [showModal]);

  if (showModal) {
    return (
      <Portal>
        <div
          className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-blur'
          onClick={setShowModalFalse}
        >
          <div
            className='w-[60vw]  bg-[#fff] shadow-card rounded-[30px] p-8'
            onClick={e => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </Portal>
    );
  } else {
    return null;
  }
};

export default Modal;
