import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
  // const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();


  const resInfo = useRestaurantMenu(resId); 
  
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      {/* image */}
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>

      <ul>
        {itemCards.map((items) => (
          <li key={items?.card?.info?.id}>
            {items?.card?.info?.name} - Rs-{items?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
