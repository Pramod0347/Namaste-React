import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";

const RestaurantDetails = () => {
    const { id } = useParams();
    console.log('Pramod 0', id);
    
    const restaurant = useRestaurant(id);

    console.log('Pramod', id);

    return (!restaurant) ? <Shimmer/> : (
        <div>
            <h1>Restaurant Details</h1>
            <p>Restaurant id: { id } </p>

            {/* {console.log(restaurant.cards[2].card.card.info.name)} */}
            <p>Restaurant Name: { restaurant?.cards[2]?.card?.card?.info?.name }</p>
            <img src={IMG_CDN_URL + restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId}></img>
            <h3>{restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
        </div>
    );
};

export default RestaurantDetails;