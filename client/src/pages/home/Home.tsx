import SearchInput from '@/components/Input/SearchInput';
import './home.scss';
import React, { useState, useEffect } from "react";
import { FOOD_API_BASE_URL, DRINKS_API_BASE_URL } from '@/config/config';
import { useQuery } from 'react-query';
import type { Meal, MealResultList, Ingredient } from '@/definitions/types';

type HomeProps = {
  message: string;
};

const Home: React.FC<HomeProps> = ({ message }) => {
  // const [meal, setMeal] = useState(null);
  // Create a function to fetch the data
  const { data: randomRecipe, isLoading, error } = useQuery({
    queryKey: ['search'],
    queryFn: () => {
      return fetch(`${FOOD_API_BASE_URL}/random.php`).then((res) =>
        res.json()
      );
    },
  });

  const { data: randomCocktail } = useQuery({
    queryKey: ['search'],
    queryFn: () => {
      return fetch(`${DRINKS_API_BASE_URL}/random.php`).then((res) =>
        res.json()
      );
    },
  });

  console.log(randomRecipe);
  // Use useEffect hook to call the function when the component mounts
  // useEffect(() => {
  //   fetchData();
  // }, []);


  return (
    <div>
      <br />
      <SearchInput />
      {randomRecipe ? (
        <div>
          {/* <h1>{meal.strMeal}</h1>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strInstructions}</p> */}
          {randomRecipe && randomRecipe.meals.map((meal: Meal) => (
                    <div key={meal.idMeal}>
                    <h1>{meal.strMeal}</h1>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strInstructions}</p>
                    </div>
                    
                ))}
        </div>
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );

  //   return (
  //     <div className="home">
  //       <h1 className="title">What&apos;s for dinner?</h1>
  //       <h2>{`${message}!`}</h2>
  //       <SearchInput />
  //     </div>

  //   );
};

export default Home;
