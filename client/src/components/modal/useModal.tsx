import { useEffect, useState } from 'react';
import 'wicg-inert';

type modalProps = {
  ModalRef: React.RefObject<HTMLDivElement>;
  OpenDialogButtonId: string;
};

interface useModalReturn {
  isModalOpen: boolean;
  OpenModalHandler: () => void;
  CloseModalHandler: () => void;
}

const useModal = ({
  ModalRef,
  OpenDialogButtonId,
}: modalProps): useModalReturn => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const KEYCODES = {
    ESCAPE: 27,
  };

  let previousScrollPosition: number;

  const OpenModalHandler = () => {
    previousScrollPosition = window.pageYOffset;
    document.body.style.top = `-${previousScrollPosition}px`;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    //Make all sibling of the modal inert
    const siblings = Array.from(
      ModalRef.current?.parentElement?.children || []
    ).filter((child) => child !== ModalRef.current);
    siblings.forEach((sibling) => {
      sibling.setAttribute('inert', '');
    });

    //Focus on the first focusable element in the modal
    const focusableElements = ModalRef.current?.querySelectorAll(
      "a[href], button, textarea, input[type='text'], input[type='radio'], input[type='checkbox'], select"
    );
    if (focusableElements && focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }
    setIsModalOpen(true);
  };

  const CloseModalHandler = () => {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';

    //Make all sibling of the modal uninert
    const siblings = Array.from(
      ModalRef.current?.parentElement?.children || []
    ).filter((child) => child !== ModalRef.current);
    siblings.forEach((sibling) => {
      sibling.removeAttribute('inert');
    });
    window.scrollTo(0, previousScrollPosition);
    setIsModalOpen(false);

    //Focus on the button that opened the modal
    const button = document.getElementById(OpenDialogButtonId);
    if (button) {
      button.focus();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' || event.keyCode === KEYCODES.ESCAPE) {
      CloseModalHandler();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown, true);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  });

  return { isModalOpen, OpenModalHandler, CloseModalHandler };
};

export default useModal;
