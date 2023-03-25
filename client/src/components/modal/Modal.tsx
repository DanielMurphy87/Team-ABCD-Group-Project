import React from 'react';
import './Modal.scss';
import { forwardRef } from 'react';

interface ModalProps {
  isModalOpen: boolean;
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps & React.RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, ModalProps>((OtherProps, ref) => {
    const { isModalOpen, children, closeModal } = OtherProps;
    return (
      <div ref={ref} className={isModalOpen ? 'modal active' : 'modal'}>
        <div aria-label="modal content" className="modal__content">
          {children}
        </div>
        <div
          onClick={closeModal}
          aria-label="close modal"
          className="modal__backdrop"
        ></div>
      </div>
    );
  });

export default Modal;
