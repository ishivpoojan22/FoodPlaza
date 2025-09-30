import { addItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";

const ItemList = ({ items, dummy }) => {
  // console.log(dummy);

  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    // dispatch an action

    dispatch(addItems(item));
    console.log(item);
  };
  return (
    <div>
      {items.map((item, idx) => (
        <div
          className="p-2 m-2 border-gray-300 border-b-2 flex text-left justify-between"
          key={`${item?.card?.info?.id ?? "item"}-${idx}`}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card?.info?.defaultPrice / 100 ||
                  item.card?.info?.finalPrice / 100 ||
                  item.card?.info?.price / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 ml-10 mt-[70px] rounded-lg bg-black text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s]"
                onClick={() => handleAddItems(item)}
              >
                Add +
              </button>
            </div>
            <div>
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
