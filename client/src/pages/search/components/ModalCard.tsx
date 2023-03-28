import ErrorComponent from '@/components/errors/ErrorComponent';
import Loading from '@/components/errors/Loading';
import Share from '@/components/ShareMenu/Share';
import { DRINKS_API_BASE_URL, FOOD_API_BASE_URL } from '@/config/config';
import React from 'react';
import { useQuery } from 'react-query';
import './modalCard.scss';

type Props = {
  CloseModalHandler: () => void;
  itemId: string;
  type: string;
};

const ModalCard: React.FC<Props> = ({ CloseModalHandler, itemId, type }) => {
  const baseUrl = type === 'food' ? FOOD_API_BASE_URL : DRINKS_API_BASE_URL;
  const { data, isLoading, error } = useQuery({
    queryKey: ['searchWithId', itemId],
    queryFn: () => {
      return fetch(`${baseUrl}/lookup.php?i=${itemId}`).then((res) =>
        res.json()
      );
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComponent message="Something went wrong, please try again" />;
  }

  return (
    <div className="card">
      {data.meals ? (
        <>
          <div className="card__imageContainer">
            <img
              className="card__image"
              src={data?.meals[0]?.strMealThumb}
              alt="search item"
            />
          </div>
          <hr className="card__divider" />
          <h3 className="card__title">{data?.meals[0]?.strMeal}</h3>
          <div className="card__details">
            <p className="card__description">
              {data?.meals[0]?.strInstructions}
            </p>
            <hr className="card__divider" />
            <p className="header-4">Ingredients:</p>
            <div className="card__tags">
              {data?.meals[0]?.strIngredient1 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient1} - ${data?.meals[0]?.strMeasure1}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient2 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient2} - ${data?.meals[0]?.strMeasure2}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient3 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient3} - ${data?.meals[0]?.strMeasure3}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient4 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient4} - ${data?.meals[0]?.strMeasure4}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient5 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient5} - ${data?.meals[0]?.strMeasure5}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient6 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient6} - ${data?.meals[0]?.strMeasure6}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient7 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient7} - ${data?.meals[0]?.strMeasure7}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient8 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient8} - ${data?.meals[0]?.strMeasure8}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient9 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient9} - ${data?.meals[0]?.strMeasure9}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient10 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient10} - ${data?.meals[0]?.strMeasure10}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient11 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient11} - ${data?.meals[0]?.strMeasure11}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient12 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient12} - ${data?.meals[0]?.strMeasure12}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient13 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient13} - ${data?.meals[0]?.strMeasure13}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient14 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient14} - ${data?.meals[0]?.strMeasure14}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient15 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient15} - ${data?.meals[0]?.strMeasure15}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient16 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient16} - ${data?.meals[0]?.strMeasure16}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient17 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient17} - ${data?.meals[0]?.strMeasure17}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient18 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient18} - ${data?.meals[0]?.strMeasure18}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient19 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient19} - ${data?.meals[0]?.strMeasure19}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient20 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient20} - ${data?.meals[0]?.strMeasure20}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient21 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient21} - ${data?.meals[0]?.strMeasure21}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient22 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient22} - ${data?.meals[0]?.strMeasure22}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient23 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient23} - ${data?.meals[0]?.strMeasure23}`}
                </span>
              )}
              {data?.meals[0]?.strIngredient24 && (
                <span className="card__tag">
                  {`${data?.meals[0]?.strIngredient24} - ${data?.meals[0]?.strMeasure24}`}
                </span>
              )}
            </div>
          </div>

          <button onClick={CloseModalHandler} className="card__Close">
            X
          </button>
          <hr className="card__divider" />
          <div className="card__table">
            <div className="card__table__row">
              <div className="card__table__row__title">Glass</div>
              <div className="card__table__row__value">
                {data?.meals[0]?.strGlass}
              </div>
            </div>
            <div className="card__table__row">
              <div className="card__table__row__title">Category</div>
              <div className="card__table__row__value">
                {data?.meals[0]?.strCategory}
              </div>
            </div>
            <div className="card__table__row">
              <div className="card__table__row__title">Alcoholic</div>
              <div className="card__table__row__value">
                {data?.meals[0]?.strAlcoholic}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card__imageContainer">
            <img
              className="card__image"
              src={data?.drinks[0].strDrinkThumb}
              alt="search item"
            />
          </div>
          <hr className="card__divider" />
          <h3 className="card__title">{data?.drinks[0].strDrink}</h3>
          <div className="card__details">
            <p className="card__description">
              {data?.drinks[0].strInstructions}
            </p>
            <hr className="card__divider" />
            <p className="header-4">Ingredients:</p>
            <div className="card__tags">
              {data?.drinks[0]?.strIngredient1 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient1} - ${data?.drinks[0]?.strMeasure1}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient2 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient2} - ${data?.drinks[0]?.strMeasure2}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient3 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient3} - ${data?.drinks[0]?.strMeasure3}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient4 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient4} - ${data?.drinks[0]?.strMeasure4}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient5 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient5} - ${data?.drinks[0]?.strMeasure5}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient6 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient6} - ${data?.drinks[0]?.strMeasure6}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient7 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient7} - ${data?.drinks[0]?.strMeasure7}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient8 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient8} - ${data?.drinks[0]?.strMeasure8}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient9 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient9} - ${data?.drinks[0]?.strMeasure9}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient10 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient10} - ${data?.drinks[0]?.strMeasure10}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient11 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient11} - ${data?.drinks[0]?.strMeasure11}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient12 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient12} - ${data?.drinks[0]?.strMeasure12}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient13 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient13} - ${data?.drinks[0]?.strMeasure13}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient14 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient14} - ${data?.drinks[0]?.strMeasure14}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient15 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient15} - ${data?.drinks[0]?.strMeasure15}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient16 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient16} - ${data?.drinks[0]?.strMeasure16}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient17 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient17} - ${data?.drinks[0]?.strMeasure17}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient18 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient18} - ${data?.drinks[0]?.strMeasure18}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient19 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient19} - ${data?.drinks[0]?.strMeasure19}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient20 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient20} - ${data?.drinks[0]?.strMeasure20}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient21 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient21} - ${data?.drinks[0]?.strMeasure21}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient22 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient22} - ${data?.drinks[0]?.strMeasure22}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient23 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient23} - ${data?.drinks[0]?.strMeasure23}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient24 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient24} - ${data?.drinks[0]?.strMeasure24}`}
                </span>
              )}
              {data?.drinks[0]?.strIngredient25 && (
                <span className="card__tag">
                  {`${data?.drinks[0]?.strIngredient25} - ${data?.drinks[0]?.strMeasure25}`}
                </span>
              )}
            </div>
          </div>

          <button onClick={CloseModalHandler} className="card__Close">
            X
          </button>
          <hr className="card__divider" />
          <div className="card__table">
            <div className="card__table__row">
              <div className="card__table__row__title">Glass</div>
              <div className="card__table__row__value">
                {data?.drinks[0]?.strGlass}
              </div>
            </div>
            <div className="card__table__row">
              <div className="card__table__row__title">Category</div>
              <div className="card__table__row__value">
                {data?.drinks[0]?.strCategory}
              </div>
            </div>
            <div className="card__table__row">
              <div className="card__table__row__title">Alcoholic</div>
              <div className="card__table__row__value">
                {data?.drinks[0]?.strAlcoholic}
              </div>
            </div>
          </div>
        </>
      )}
      <Share
        recipeUrl={`https://whatsfordinner.pages.dev/search/:${type}/:${itemId}`}
        message="Check out this recipe"
      />
      <div className="card__spacer"></div>
    </div>
  );
};

export default ModalCard;
