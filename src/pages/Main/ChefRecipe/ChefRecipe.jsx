import { useState } from 'react';
import StarRatings from 'react-star-ratings';

const ChefRecipe = ({ food }) => {
    const [accepted, setAccepted] = useState(false)
    const { star_rating, cooking_method, food_name, ingredients } = food;
    const btnDisable = () => {
        setAccepted(true)
    }
    return (
        <div>
            <div className="card h-full shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl">{food_name}</h2>
                    <div className="border-l-2 p-3">
                        <p className="font-medium mb-3">Ingredients</p>
                        {
                            ingredients.map((c, index) => <div key={index}>
                                <li type="1" className="pb-3">{c}</li>
                                <hr />
                            </div>)
                        }
                    </div>
                    <div><StarRatings
                        rating={parseInt(star_rating)}
                        starRatedColor="goldenRod"
                        numberOfStars={5}
                        starDimension="16px"
                        starSpacing="5px"
                    />{star_rating}</div>
                    <p><span className='font-medium'>Cooking Method:</span> {cooking_method}</p>
                    <div className="card-actions mt-5 justify-center">
                        <button onClick={btnDisable} disabled={accepted} className="btn btn-primary text-lg capitalize">Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe;