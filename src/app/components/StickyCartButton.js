import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContent';

const StickyCartButton = () => {
  const [cartItems] = useContext(CartContext);

  const totalQuantity = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.quantity;
  }, 0);

  return (
    <div className="sticky-cart-button">
      <Link to="/cart">
        Go To Cart ({totalQuantity})
      </Link>
    </div>
  );
};

export default StickyCartButton;
