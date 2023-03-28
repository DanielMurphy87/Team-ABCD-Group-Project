import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import './SearchInput.scss';

type SearchInputProps = {};

type SearchType = 'meals' | 'drinks';

const SearchInput = ({}: SearchInputProps) => {
  const [inputValue, setInputValue] = React.useState('');
  const [searchType, setSearchType] = React.useState<SearchType>('meals');

  const navigate = useNavigate();

  const inputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  window.addEventListener('load', () => inputRef.current?.focus());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    navigate(`/search/:${inputValue}`, {
      replace: true,
      state: { searchType },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="searchBar">
      <div className="searchBar__inputContainer">
        <input
          ref={inputRef}
          id="searchInput"
          name="searchInput"
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="searchBar__input"
        />
        <button onClick={handleSubmit} className="searchBar__button">
          <BsSearch className="searchBar__icon" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
