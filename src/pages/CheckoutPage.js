import React, { useContext, useState } from "react";
import { CartContext } from "../app/components/CartContent";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [customTip, setCustomTip] = useState("");

  const taxRate = 0.087; // 8.7% tax
  const suggestedTips = [0.12, 0.15, 0.18]; // 12%, 15%, 18%

  const calculateTotal = () => {
    return cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity;
    }, 0);
  };

  const calculateTax = () => {
    return calculateTotal() * taxRate;
  };

  const calculateTip = (tipPercentage) => {
    return calculateTotal() * tipPercentage;
  };

  const calculateTotalWithCustomTip = () => {
    return calculateTotal() + calculateTax() + parseFloat(customTip);
  };

  const handleSuggestedTipClick = (tipAmount) => {
    setCustomTip(tipAmount.toFixed(2));
  };

  const handlePlaceOrder = () => {
    // Reset the cart
    setCartItems([]);

    // Clear cart items from local storage
    localStorage.removeItem("cartItems");

    // Show a message indicating a successful order
    alert("Order placed successfully! Despite the sky-high demand, we still don't offer refunds... but who knows what the future holds! 😉");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <p>Subtotal: ${calculateTotal().toFixed(2)}</p>
      <p>Tax (8.7%): ${calculateTax().toFixed(2)}</p>
      <h3>Suggested Tips:</h3>
      {suggestedTips.map((tip) => (
        <button
          key={tip}
          onClick={() => handleSuggestedTipClick(calculateTip(tip))}
        >
          {Math.round(tip * 100)}% = ${calculateTip(tip).toFixed(2)}
        </button>
      ))}
      <label htmlFor="custom-tip">Tip:</label>
      <input
        id="custom-tip"
        type="number"
        value={customTip}
        onChange={(e) => setCustomTip(e.target.value)}
      />
      <p>Tip: ${customTip}</p>
      <p>Total w/ Tip: ${calculateTotalWithCustomTip().toFixed(2)}</p>
      <button className="place-order-button" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
