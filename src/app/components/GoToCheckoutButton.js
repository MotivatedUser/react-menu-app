import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContent";

const GoToCheckoutButton = () => {
  const [cartItems] = useContext(CartContext);

  const getTotalQuantity = () => {
    return cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
  };

  return (
    <div className="sticky-cart-button">
      <Link to="/checkout">Go to Checkout ({getTotalQuantity()})</Link>
    </div>
  );
};

export default GoToCheckoutButton;

