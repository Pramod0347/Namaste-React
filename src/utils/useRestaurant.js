import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

console.log(FETCH_MENU_URL);

const useRestaurant = (id) => {
    console.log("prasmofd 1", id);
    
  const [restaurant, setRestauraunt] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setRestauraunt(json.data);
  }
  return restaurant;
};
export default useRestaurant;