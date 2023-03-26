import './health.scss';
import { useFetchData } from '@/hooks/use_fetch_data';
// import { outputFetchResult } from '@/utils/output_fetch_result';
import type { Ingredient } from '@/definitions/types';
import { FOOD_API_BASE_URL, DRINKS_API_BASE_URL } from '@/config/config';

const Health: React.FC = () => {

    const mealdbstatus = useFetchData(
        `${FOOD_API_BASE_URL}/list.php?i=list`
    );
    const cocktaildbstatus = useFetchData(
        `${DRINKS_API_BASE_URL}/list.php?i=list`
    );
    
    return (
        <div className="health">
            <h1 className="mealhealth">
            The MealDB is: {mealdbstatus.status === 200 ? '✔️' : '❌'}    
            </h1>
            <h1 className="drinkshealth">
            The CocktailDB is: {cocktaildbstatus.status === 200 ? '✔️' : '❌'}    
            </h1>
        </div>
    );
};

export default Health;