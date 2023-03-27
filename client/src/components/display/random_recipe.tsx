import React, { useState, useEffect } from "react";
import { FOOD_API_BASE_URL, DRINKS_API_BASE_URL } from '@/config/config';
import { useQuery } from 'react-query';
import type { Meal, Cocktail } from '@/definitions/types';
import './random_recipe.scss';

type RandomRecipeProps = {};

const RandomRecipe = ({ }: RandomRecipeProps) => {
    const [randomNumber, setRandomNumber] = useState(0);

    useEffect(() => {
        const initialRandomNumber = Math.random();
        setRandomNumber(initialRandomNumber);
    }, []);

    const { data } = useQuery({
        queryKey: ['random'],
        queryFn: () => {
            if (randomNumber < 0.5) {
                return fetch(`${FOOD_API_BASE_URL}/random.php`).then((res) =>
                    res.json()
                );
            } else {
                return fetch(`${DRINKS_API_BASE_URL}/random.php`).then((res) =>
                    res.json()
                );
            }
        },
    });

    const generateRandomNumber = () => {
        const newRandomNumber = Math.random();
        setRandomNumber(newRandomNumber);
    };

    const isFood = data?.meals ? true : false;

    return (
        <div className="random-recipe">
            {data ? (
                <div className="random-recipe-card">
                    {isFood ? (
                        // Display the food data
                        data.meals.map((meal: Meal) => (
                            <div key={meal.idMeal}>
                                <h1>{meal.strMeal}</h1>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                                <p>{meal.strMeasure1} : {meal.strIngredient1}</p>
                                <p>{meal.strMeasure2} : {meal.strIngredient2}</p>
                                <p>{meal.strMeasure3} : {meal.strIngredient3}</p>
                                <p>{meal.strMeasure4} : {meal.strIngredient4}</p>
                                <p>{meal.strMeasure5} : {meal.strIngredient5}</p>
                                <p>{meal.strInstructions}</p>
                            </div>
                        ))
                    ) : (
                        // Display the drinks data
                        data.drinks.map((cocktail: Cocktail) => (
                            <div key={cocktail.idDrink}>
                                <h1>{cocktail.strDrink}</h1>
                                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                                <p>{cocktail.strMeasure1} : {cocktail.strIngredient1}</p>
                                <p>{cocktail.strMeasure2} : {cocktail.strIngredient2}</p>
                                <p>{cocktail.strMeasure3} : {cocktail.strIngredient3}</p>
                                <p>{cocktail.strInstructions}</p>
                            </div>
                        ))
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RandomRecipe;