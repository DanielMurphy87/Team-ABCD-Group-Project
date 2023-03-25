import React from 'react';
import './modalCard.scss';

type Props = {
  CloseModalHandler: () => void;
  foodImage: string;
};

const ModalCard: React.FC<Props> = ({ CloseModalHandler, foodImage }) => {
  return (
    <div className="card">
      <div className="card__imageContainer">
        <img className="card__image" src={foodImage} alt="search item" />
      </div>
      <div className="card__details">
        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae
          quod, voluptate, quibusdam, voluptates voluptas quidem voluptatum
          doloremque quos quia quas. Quisquam, quae. Quisquam quae quod,
          voluptate, quibusdam, voluptates voluptas quidem voluptatum doloremque
          quos quia quas. Quisquam, quae.
        </p>

        <p className="header-4">Ingredients:</p>
        <div className="card__tags">
          <span className="card__tag">Tag</span>
          <span className="card__tag">Tag</span>
          <span className="card__tag">Tag</span>
        </div>
      </div>

      <button onClick={CloseModalHandler} className="card__Close">
        X
      </button>
    </div>
  );
};

export default ModalCard;
