import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import userContext from "../utils/userContext";

const RestaurantCard = (props) => {


  const data = useContext(userContext);
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] flex flex-col justify-between rounded-xl bg-gray-100 hover:bg-gray-200 transition-transform duration-200 transform hover:scale-105 shadow">
      <img
        className="rounded-sm"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div className="res-text">
        <h3 className="font-bold text-lg py-4">{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>{avgRating} Rating</p>
        <p>{sla?.deliveryTime} minutes</p>
        <p className="font-bold italic">User: {data.loggedInUser}</p>
      </div>
    </div>
  );
};

// higher order function
// it take the input RestaurantCard and modified and return a new RestaurantCardVeg with veg(label)

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative transition-transform duration-200 transform hover:scale-105">
        <label className="absolute  bg-green-600 text-white m-4 z-10 rounded-lg p-1 transition-transform duration-200 transform hover:scale-105">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
