import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  // let listofRestaurant = [
  //   {
  //     info: {
  //       id: "385824",
  //       name: "The Belgian Waffle Co.",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",

  //       areaName: "Mohan Nagar",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
  //       avgRatingString: 4.6,
  //       deliveryTime: 62,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "385825",
  //       name: "2The Belgian Waffle Co.",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",

  //       areaName: "Mohan Nagar",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
  //       avgRatingString: 3.6,
  //       deliveryTime: 62,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "385826",
  //       name: "3The Belgian Waffle Co.",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",

  //       areaName: "Mohan Nagar",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
  //       avgRatingString: 4.4,
  //       deliveryTime: 62,
  //     },
  //   },
  // ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.2388471&lng=78.16214370000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setlistofRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listofRestaurant.filter(
              (res) => res.info.avgRating > 4
            );

            setfilteredRestaurant(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
