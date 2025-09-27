import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";


const useRestaurantMenu = (resId) => {

    const [resInfo, setresInfo] = useState(null);

    
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    // console.log(data);
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
