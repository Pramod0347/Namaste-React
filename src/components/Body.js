import { restaurantList } from "../config";
import RestuarantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) => restaurant.info.name.includes(searchText));
}

const Body = () => {
  // searchText is a local state variable
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState(); // to create state variable

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the searched el
            const data = filterData(searchText, restaurants);
            // update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestuarantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
