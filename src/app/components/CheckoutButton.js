import React from "react";

const CheckoutButton = ({ cartItems, calculateTotal }) => {
  const handleCheckout = () => {
    alert(`Total amount: $${calculateTotal()}. Thank you for your order!`);
    // Reset the cart after the checkout
    cartItems.splice(0, cartItems.length);
  };

  return (
    <button className="checkout-button" onClick={handleCheckout}>
      Checkout
    </button>
  );
};

export default CheckoutButton;