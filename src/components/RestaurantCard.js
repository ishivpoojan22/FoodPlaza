import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla,
  } = resData?.info;

  return (
    <div className="res-card" style={{ background: "#0f0f0f0f" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div className="res-text">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>{avgRating} Rating</p>
        <p>{sla?.deliveryTime} minutes</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
