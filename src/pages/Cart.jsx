import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="border p-4 flex justify-between">
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
          </div>
        ))
      )}
      <Link to="/checkout" className="bg-green-500 text-white p-2 mt-4 inline-block">Go to Checkout</Link>
    </div>
  );
};

export default Cart;
