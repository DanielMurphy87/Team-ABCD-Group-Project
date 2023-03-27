import './health.scss';
import { useFetchData } from '@/hooks/use_fetch_data';
// import { outputFetchResult } from '@/utils/output_fetch_result';
import type { Meal, MealResultList, Ingredient } from '@/definitions/types';
import { FOOD_API_BASE_URL, DRINKS_API_BASE_URL } from '@/config/config';

const Health: React.FC = () => {

    const { data: mealdbstatus, error, isFetching, status } = useFetchData<MealResultList>(
        `${FOOD_API_BASE_URL}/filter.php?i=beef`
    );
    const cocktaildbstatus = useFetchData(
        `${DRINKS_API_BASE_URL}/filter.php?i=beer`
    );

    return (
        <div className="health">
            <p className="health__title">
            {' '}
                The MealDB is: {status === 200 ? '✔️' : '❌'}
                {/* {mealdbstatus && mealdbstatus.meals.map((meal: Meal) => (
                    <div key={meal.idMeal}>{meal.strMeal}{meal.idMeal}</div>
                ))} */}
            </p>
            <h1 className="health__title">
                The CocktailDB is: {cocktaildbstatus.status === 200 ? '✔️' : '❌'}
            </h1>
        </div>
    );
};

export default Health;