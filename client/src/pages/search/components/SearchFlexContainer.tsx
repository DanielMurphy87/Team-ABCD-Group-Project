import React, { useId } from 'react';
import './searchFlexContainer.scss';
import foodImage from '../../../assets/food.jpg';
import useModal from '@/components/modal/useModal';
import Modal from '@/components/modal/Modal';
import { createPortal } from 'react-dom';
import ModalCard from './ModalCard';

type SearchContainerProps = {
  children: React.ReactNode;
};
type SearchItemProps = {};

<<<<<<< HEAD
export const SearchItem: React.FC<SearchItemProps> = () => {
=======
export const SeachItem: React.FC<SearchItemProps> = () => {
  const ModalRef = React.useRef<HTMLDivElement>(null);
  const OpenDialogId = useId();
  const { isModalOpen, OpenModalHandler, CloseModalHandler } = useModal({
    ModalRef,
    OpenDialogButtonId: OpenDialogId,
  });

>>>>>>> searchPageDesign
  return (
    <div className="searchItem">
      <div className="searchItem__imageContainer">
        <img className="searchItem__image" src={foodImage} alt="search item" />
      </div>
      <div className="searchItem__details">
        <h3 className="searchItem__title">Ewedu Soap</h3>
        <p className="searchItem__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae
          quod, voluptate, quibusdam, voluptates voluptas quidem voluptatum
          doloremque quos quia quas. Quisquam, quae. Quisquam quae quod,
          voluptate, quibusdam, voluptates voluptas quidem voluptatum doloremque
          quos quia quas. Quisquam, quae.
        </p>
        <hr className="searchItem__divider" />
        <div className="searchItem__tags">
          <span className="searchItem__tag">Tag</span>
          <span className="searchItem__tag">Tag</span>
          <span className="searchItem__tag">Tag</span>
        </div>
        <hr className="searchItem__divider" />
        <div className="searchItem__actions">
          <button
            id={OpenDialogId}
            aria-label="open modal"
            onClick={OpenModalHandler}
            className="searchItem__showMore"
          >
            Show More
          </button>
          <button className="searchItem__save">Save</button>
        </div>
        {isModalOpen &&
          createPortal(
            <Modal
              ref={ModalRef}
              isModalOpen={isModalOpen}
              closeModal={CloseModalHandler}
            >
              <ModalCard
                CloseModalHandler={CloseModalHandler}
                foodImage={foodImage}
              />
            </Modal>,
            document.body
          )}
      </div>
    </div>
  );
};

const SearchFlexContainer: React.FC<SearchContainerProps> = ({ children }) => {
  return <div className="searchFlex">{children}</div>;
};

export default SearchFlexContainer;
