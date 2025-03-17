import RestuarantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";


const Body = () => {
  // searchText is a local state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-4 mt-2 bg-pink-50 flex">
        <input
          type="text"
          className="search-input border-gray-500 border p-2 rounded text-xs w-[20%] focus:outline-none"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn border-gray-500 border p-2 rounded bg-black hover:bg-slate-600 text-white ml-2 text-xs"
          onClick={() => {
            // need to filter the searched el
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input value={user.name} onChange= {
          e => setUser({
            ...user,
            name: e.target.value,
          })
        }></input>
        <input value={user.email} onChange= {
          e => setUser({
            ...user,
            email: e.target.value,
          })
        }></input>
      </div>
      <div className="restaurant-list flex gap-4 flex-wrap p-4 justify-around">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Matches found!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                className="min-w-80 w-80 shadow-2xl rounded-xl"
                to={"/restaurantDetails/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestuarantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
