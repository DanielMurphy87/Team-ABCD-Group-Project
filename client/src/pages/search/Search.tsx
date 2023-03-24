import SearchFlexContainer, {
  SearchItem,
} from './components/SearchFlexContainer';
import './search.scss';

const Search = () => {
  return (
    <div className="searchPage">
      <SearchFlexContainer>
        {[...Array(10)].map((_, i) => (
          <SearchItem key={i} />
        ))}
      </SearchFlexContainer>
    </div>
  );
};

export default Search;
