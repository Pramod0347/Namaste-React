import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";

const RestaurantDetails = () => {
    const { id } = useParams();

    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=" + id);
        const json = await data.json();
        setRestaurant(json.data);
        console.log('restaurantInfo', json.data.cards[2]);
    }

    return (!restaurant) ? <Shimmer/> : (
        <div>
            <h1>Restaurant Details</h1>
            <p>Restaurant id: { id } </p>

            {/* {console.log(restaurant.cards[2].card.card.info.name)} */}
            <p>Restaurant Name: { restaurant.cards[2].card.card.info.name }</p>
            <img src={IMG_CDN_URL + restaurant.cards[2].card.card.info.cloudinaryImageId}></img>
        </div>
    );
};

export default RestaurantDetails;