import { restaurantList } from "../config";
import RestuarantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestuarantCard {...restaurant.info} key={restaurant.info.id} />;
      })}
      {/* <RestuarantCard {...restaurantList[0].info}/>
        <RestuarantCard {...restaurantList[1].info}/>
        <RestuarantCard {...restaurantList[2].info}/>
        <RestuarantCard {...restaurantList[0].info}/>
        <RestuarantCard {...restaurantList[1].info}/>
        <RestuarantCard {...restaurantList[2].info}/>
        <RestuarantCard {...restaurantList[3].info}/> */}
    </div>
  );
};

export default Body;