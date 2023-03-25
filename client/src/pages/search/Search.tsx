import SearchFlexContainer, {
  SearchItem,
} from './components/SearchFlexContainer';
import './search.scss';

const Search = () => {
  return (
    <div className="searchPage container">
      <div className="searchPage__header">
        <h1 className="searchPage__title">10 Results</h1>
        <div className="searchPage__searchBar">
          <input
            className="searchPage__searchInput"
            type="text"
            placeholder="Search for a recipe"
          />
          <button className="searchPage__searchButton">Search</button>
        </div>
      </div>

      <SearchFlexContainer>
        {[...Array(10)].map((_, i) => (
          <SearchItem key={i} />
        ))}
      </SearchFlexContainer>
    </div>
  );
};

export default Search;
