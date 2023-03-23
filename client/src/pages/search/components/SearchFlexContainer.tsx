import React from 'react';
import './searchFlexContainer.scss';
import foodImage from '../../../assets/food.jpg';

type SearchContainerProps = {
  children: React.ReactNode;
};
type SearchItemProps = {};

export const SeachItem: React.FC<SearchItemProps> = () => {
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
          <button className="searchItem__showMore">Action</button>
          <button className="searchItem__save">Action</button>
        </div>
      </div>
    </div>
  );
};

const SearchFlexContainer: React.FC<SearchContainerProps> = ({ children }) => {
  return <div className="searchFlex">{children}</div>;
};

export default SearchFlexContainer;
