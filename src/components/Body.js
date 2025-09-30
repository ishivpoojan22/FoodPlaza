import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  const { setUserName, loggedInUser } = useContext(userContext);

  // console.log(listofRestaurant);

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
    try {
      const url1 =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      const url2 =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.2388471&lng=78.16214370000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

      const url3 =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

      const [res1, res2, res3] = await Promise.all([
        fetch(url1),
        fetch(url2),
        fetch(url3),
      ]);
      const [json1, json2, json3] = await Promise.all([
        res1.json(),
        res2.json(),
        res3.json(),
      ]);

      const list1 =
        json1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      const list2 =
        json2?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      const list3 =
        json3?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      const merged = [...list1, ...list2, ...list3];

      setlistofRestaurant(merged);
      setfilteredRestaurant(merged);
    } catch (err) {
      console.log(err);
      setlistofRestaurant([]);
      setfilteredRestaurant([]);
    }
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

    // const json = await data.json();
    // console.log(json);
    // setlistofRestaurant(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // setfilteredRestaurant(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  // POST update list API
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/update",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ lat: 27.2388471, lng: 78.16214370000002 }),
  //       }
  //     );
  //     const json = await response.json();
  //     const updatedList =
  //       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants ?? [];
  //     setlistofRestaurant(updatedList);
  //     setfilteredRestaurant(updatedList);
  //   } catch (err) {
  //     console.error("Update API error:", err);
  //   }
  // };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1> you are offline check your internet connection</h1>;
  }
  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" bg-gray-200">
      <div className="flex">
        <div className="flex m-4 gap-6">
          <div className="mt-2 m-2">
            <input
              className="border border-black rounded-lg bg-white focus:border-gray-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              type="text"
              value={searchText}
              onChange={(e) => {
                setsearchText(e.target.value);
              }}
            />
          </div>

          <button
            className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition min-w-[150px]"
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
          <button
            className="  px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition min-w-[150px]"
            onClick={() => {
              const filtered = listofRestaurant.filter(
                (res) => res.info.avgRating > 4
              );

              setfilteredRestaurant(filtered);
            }}
          >
            Top Rated Restaurants
          </button>
          <div className="m-2">
            <label className="font-semiboldbold">User :</label>
            <input
              type="text"
              className="border border-black p-1.5 rounded-lg"
              value={loggedInUser}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap pl-13">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCardVeg resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
