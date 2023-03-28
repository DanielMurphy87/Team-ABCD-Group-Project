import React, { useId } from 'react';
import './searchFlexContainer.scss';
import foodImage from '../../../assets/food.jpg';
import useModal from '@/components/modal/useModal';
import Modal from '@/components/modal/Modal';
import { createPortal } from 'react-dom';
import ModalCard from './ModalCard';
import { useNavigate } from 'react-router-dom';
import Share from '@/components/ShareMenu/Share';

type SearchContainerProps = {
  children: React.ReactNode;
};
type SearchItemProps = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  type: string;
};

export const SearchItem: React.FC<SearchItemProps> = ({
  idMeal,
  strMeal,
  strMealThumb,
  type,
}) => {
  const ModalRef = React.useRef<HTMLDivElement>(null);
  const OpenDialogId = useId();
  const { isModalOpen, OpenModalHandler, CloseModalHandler } = useModal({
    ModalRef,
    OpenDialogButtonId: OpenDialogId,
  });
  const navigate = useNavigate();

  const HandlerDetailView = () => {
    navigate(`/search/:${type}/:${idMeal}`);
  };

  return (
    <div className="searchItem">
      <div className="searchItem__imageContainer">
        <img
          className="searchItem__image"
          src={strMealThumb}
          alt="search item"
        />
      </div>
      <div className="searchItem__details">
        <h3 className="searchItem__title">{strMeal}</h3>
        <hr className="searchItem__divider" />
        <div className="searchItem__actions">
          <button
            id={OpenDialogId}
            aria-label="open modal"
            onClick={OpenModalHandler}
            className="searchItem__showMore"
          >
            Quick View
          </button>
          <button onClick={HandlerDetailView} className="searchItem__save">
            Detail View
          </button>
        </div>
        <hr className="searchItem__divider" />
        <Share
          recipeUrl={`https://whatsfordinner.pages.dev/search/:${type}/:${idMeal}`}
          message={`Check out this ${type} recipe!`}
        />
        {isModalOpen &&
          createPortal(
            <Modal
              ref={ModalRef}
              isModalOpen={isModalOpen}
              closeModal={CloseModalHandler}
            >
              <ModalCard
                CloseModalHandler={CloseModalHandler}
                itemId={idMeal}
                type={type}
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
