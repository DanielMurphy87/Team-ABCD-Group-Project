import SearchFlexContainer, {
  SearchItem,
} from './components/SearchFlexContainer';
import { useLocation } from 'react-router-dom';
import { useQueries } from 'react-query';
import './search.scss';
import { FOOD_API_BASE_URL, DRINKS_API_BASE_URL } from '@/config/config';
import SearchInput from '@/components/Input/SearchInput';
import { useEffect, useRef, useState } from 'react';

type showResultType = 'food' | 'drink';

const Search = () => {
  const [showResult, setShowResult] = useState<showResultType>('food');
  const location = useLocation();
  let searchTerm: string = location.pathname.split('/')[2]?.substring(1) || ' ';

  // const firstUpdate = useRef(true);

  const result = useQueries([
    {
      queryKey: ['foodSearch', searchTerm],
      queryFn: () => {
        return fetch(`${FOOD_API_BASE_URL}filter.php?i=${searchTerm}`).then(
          (res) => {
            return res.json();
          }
        );
      },
    },
    {
      queryKey: ['drinkSearch', searchTerm],
      queryFn: () => {
        return fetch(`${DRINKS_API_BASE_URL}filter.php?i=${searchTerm}`).then(
          (res) => {
            if (res.status === 200) {
              return res.text().then((text) => {
                if (text === '') {
                  return { drinks: null };
                } else {
                  return JSON.parse(text);
                }
              });
            }
          }
        );
      },
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
      retry: 0,
    },
  ]);

  const {
    data: fooddata,
    isLoading: foodLoading,
    error: foodError,
    refetch: foodRefetch,
    isRefetching: foodIsRefetching,
  } = result[0];

  const {
    data: drinkdata,
    isLoading: drinkLoading,
    error: drinkError,
    refetch: drinkRefetch,
    isRefetching: drinkIsRefetching,
  } = result[1];

  if (foodLoading || drinkLoading || foodIsRefetching || drinkIsRefetching) {
    return <div>Loading...</div>;
  }

  if (foodError || drinkError) {
    return <div>Error</div>;
  }

  // useEffect(() => {
  //   if (firstUpdate.current) {
  //     firstUpdate.current = false;
  //     return;
  //   }
  //   setSearchTermState(searchTerm);
  //   foodRefetch();
  //   drinkRefetch();
  // }, [searchTerm]);

  return (
    <div className="searchPage container">
      <SearchInput />
      <div className="searchPage__header">
        <h1 className="searchPage__amount">
          {`meals found: ${
            fooddata?.meals !== null ? fooddata?.meals?.length : 0
          } and drinks found: ${
            drinkdata?.drinks !== null ? drinkdata?.drinks?.length : 0
          }`}
        </h1>

        <select
          className="searchPage__show"
          onChange={(e) => setShowResult(e.target.value as showResultType)}
          name="show"
          id="show"
          value={showResult}
        >
          <option value="food">Food</option>
          <option value="drink">Drink</option>
        </select>
      </div>

      <SearchFlexContainer>
        {/* {showResult === 'food' ? (
          fooddata?.meals === null ? (
            <h1>No meals found</h1>
          ) : !foodIsRefetching ? (
            fooddata?.meals.map((meal: any) => (
              <SearchItem
                key={meal.idMeal}
                strMeal={meal.strMeal}
                strMealThumb={meal.strMealThumb}
                idMeal={meal.idMeal}
                type="food"
              />
            ))
          ) : (
            <h1> relaoding </h1>
          )
        ) : drinkdata?.drinks === null ? (
          <h1>No drinks found</h1>
        ) : (
          !drinkIsRefetching &&
          drinkdata?.drinks.map((drink: any) => (
            <SearchItem
              key={drink.idDrink}
              strMeal={drink.strDrink}
              strMealThumb={drink.strDrinkThumb}
              idMeal={drink.idDrink}
              type="drink"
            />
          ))
        )} */}
        {showResult === 'food' ? (
          fooddata?.meals === null ? (
            <h1>No meals found</h1>
          ) : foodIsRefetching ? (
            <h1>Loading...</h1>
          ) : (
            fooddata?.meals.map((meal: any) => (
              <SearchItem
                key={meal.idMeal}
                strMeal={meal.strMeal}
                strMealThumb={meal.strMealThumb}
                idMeal={meal.idMeal}
                type="food"
              />
            ))
          )
        ) : drinkdata?.drinks === null ? (
          <h1>No drinks found</h1>
        ) : drinkIsRefetching ? (
          <h1>Loading...</h1>
        ) : (
          drinkdata?.drinks.map((drink: any) => (
            <SearchItem
              key={drink.idDrink}
              strMeal={drink.strDrink}
              strMealThumb={drink.strDrinkThumb}
              idMeal={drink.idDrink}
              type="drink"
            />
          ))
        )}
      </SearchFlexContainer>
    </div>
  );
};

export default Search;
