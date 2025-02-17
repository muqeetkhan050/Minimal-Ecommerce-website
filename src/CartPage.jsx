import React, { useContext } from "react";
import { CartContext } from ".CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold text-primary">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="list-group">
          {cart.map((item) => (
            <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <img src={item.image} alt={item.name} width="50" height="50" className="rounded" />
              <span>{item.name} - ${item.price}</span>
              <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default CartPage;