import './health.scss';
import { useFetchData } from '@/hooks/use_fetch_data';
// import { outputFetchResult } from '@/utils/output_fetch_result';
import type { Ingredient } from '@/definitions/types';
import { FOOD_API_BASE_URL } from '@/config/config';

type HealthProps = {
    message: string;
};

const Health: React.FC<HealthProps> = ({ message }) => {

    const status = useFetchData<Ingredient>(
        `${FOOD_API_BASE_URL}/list.php?i=list`
    );

    return (
        <div className="health">
            <h1 className="title">{status.status}</h1>
            <h2>{`${message}!`}</h2>
        </div>
    );
};

export default Health;