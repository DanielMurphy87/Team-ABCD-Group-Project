import SearchFlexContainer, {
  SearchItem,
} from './components/SearchFlexContainer';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import './search.scss';
import { FOOD_API_BASE_URL, DRINKS_API_BASE_URL } from '@/config/config';
import SearchInput from '@/components/Input/SearchInput';

const Search = () => {
  const location = useLocation();
  let searchTerm = location.pathname.split('/')[2].substring(1);
  let searchType: string = location?.state?.searchType;

  let base_url =
    searchType === 'meals' ? FOOD_API_BASE_URL : DRINKS_API_BASE_URL;

  console.log(searchType);
  console.log(`${base_url}filter.php?i=${searchTerm}`);

  const { data, isLoading, error } = useQuery({
    queryKey: ['search'],
    queryFn: () => {
      return fetch(`${base_url}/filter.php?i=${searchTerm}`).then((res) =>
        res.json()
      );
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <>
        <div>{`Error: ${error}`}</div>
      </>
    );
  }

  return (
    <div className="searchPage container">
      <div className="searchPage__header">
        <h1 className="searchPage__title">10 Results</h1>
        <SearchInput />
      </div>

      <SearchFlexContainer>
        {data.meals.map((item: any) => (
          <SearchItem
            idMeal={item.idMeal}
            strMeal={item.strMeal}
            strMealThumb={item.strMealThumb}
          />
        ))}
      </SearchFlexContainer>
    </div>
  );
};

export default Search;
