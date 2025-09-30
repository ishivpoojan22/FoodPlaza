import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // const [showItems, setShowItems] = useState(false);
  //   console.log(data);
  // Uncontrolled component

  // console.log(dummy)
  const changeHandler = () => {
      setShowIndex()
  };

  return (
    <div>
      {/* header */}
      <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-6 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={changeHandler}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
