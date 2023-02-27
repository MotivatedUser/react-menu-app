import React, { useState } from 'react';

function Checkout() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission and order processing
  }

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
        </label>
        <label>
          City:
          <input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
        </label>
        <label>
          State:
          <input type="text" value={state} onChange={(event) => setState(event.target.value)} />
        </label>
        <label>
          Zip:
          <input type="text" value={zip} onChange={(event) => setZip(event.target.value)} />
        </label>
        <label>
          Card Number:
          <input type="text" value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} />
        </label>
        <label>
          Expiration Date:
          <input type="text" value={expDate} onChange={(event) => setExpDate(event.target.value)} />
        </label>
        <label>
          CVV:
          <input type="text" value={cvv} onChange={(event) => setCvv(event.target.value)} />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;


// import React, { useContext } from "react";
// import Cart from "../app/components/Cart";
// import { CartContext } from "../app/components/CartContent";

// const CheckoutPage = () => {
//   const [cartItems, setCartItems] = useContext(CartContext);

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price, 0);
//   };

//   return (
//     <>
//       <h2>Checkout</h2>
//       <Cart cartItems={cartItems} />
//       <p>Total: ${calculateTotal()}</p>
//       <button onClick={() => setCartItems([])}>Clear Cart</button>
//     </>
//   );
// };

// export default CheckoutPage;
