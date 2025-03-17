import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestuarantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRatingString,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="card">
      <div className="card-img">
        <img className="min-w-80 w-80 min-h-80 h-80 rounded-r-xl rounded-l-xl" src={IMG_CDN_URL + cloudinaryImageId}></img>
      </div>
      <div className="p-3">
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRatingString} Stars</h4>
        <h5 className="font-bold">
          {user.name} - {user.email}
        </h5>
      </div>
    </div>
  );
};

export default RestuarantCard;
