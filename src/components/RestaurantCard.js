import { IMG_CDN_URL } from "../config";

const RestuarantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      </div>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} Stars</h4>
    </div>
  );
};

export default RestuarantCard;
