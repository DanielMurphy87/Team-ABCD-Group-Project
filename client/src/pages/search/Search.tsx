import SearchFlexContainer, {
  SeachItem,
} from './components/SearchFlexContainer';
import './search.scss';

const Search = () => {
  return (
    <div className="searchPage">
      <SearchFlexContainer>
        {[...Array(10)].map((_, i) => (
          <SeachItem key={i} />
        ))}
      </SearchFlexContainer>
    </div>
  );
};

export default Search;
