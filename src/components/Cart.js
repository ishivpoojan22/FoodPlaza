import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItems } from "../utils/cartSlice";

const Cart = ({item}) => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

    const handleRemoveItem = () => {
    if (!cartItems || cartItems.length === 0) return;
    const lastItem = cartItems[cartItems.length - 1];
    // If items have an `id` property, send that; otherwise send the index
    const payload = lastItem && lastItem.id !== undefined ? lastItem.id : cartItems.length - 1;
    dispatch(removeItems(payload));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(removeItems());
  };

  //   const dispatch = useDispatch();
  //   const handleAddItems = (item) => {
  //     // dispatch an action

  //     dispatch(addItems(item));
  //     console.log(item);
  //   };
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="font-bold text-2xl">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <button
          className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer"
          onClick={handleRemoveItem}
        >
          Remove Item
        </button>

        {cartItems.length === 0 && (
          <h1>Cart is Empty. Please add some Items.</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
