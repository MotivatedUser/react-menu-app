
import React, { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";
import { CartContext } from "./CartContent";

const Cart = () => {
  const [cartItems, setCartItems] = useContext(CartContext);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
  };

  const updateItemQuantity = (item, newQuantity) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: newQuantity };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity;
    }, 0);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              item={ cartItem }
              quantity={1}
              handleRemoveFromCart={removeItemFromCart}
              handleUpdateQuantity={updateItemQuantity}
            />
          ))}
          <div className="cart-total">
            <p>Total: ${calculateTotal()}</p>
            <CheckoutButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;




// import React from "react";
// import CartItem from "./CartItem";
// import CheckoutButton from "./CheckoutButton";

// const Cart = ({ cartItems, handleRemoveFromCart, handleUpdateQuantity }) => {
//   const calculateTotal = () => {
//     return cartItems.reduce((total, cartItem) => {
//       return total + cartItem.price * cartItem.quantity;
//     }, 0);
//   };

//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cartItems.map((cartItem) => (
//             <CartItem
//               key={cartItem.id}
//               item={cartItem}
//               handleRemoveFromCart={handleRemoveFromCart}
//               handleUpdateQuantity={handleUpdateQuantity}
//             />
//           ))}
//           <div className="cart-total">
//             <p>Total: ${calculateTotal()}</p>
//             <CheckoutButton />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

// import React, { useState } from "react";
// import CartItem from "../app/components/CartItem";
// import CheckoutButton from "../app/components/CheckoutButton";

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   // Function to handle removing an item from the cart
//   const handleRemoveFromCart = (item) => {
//     const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
//     setCartItems(updatedCartItems);
//   };

//   // Function to handle updating the quantity of an item in the cart
//   const handleUpdateQuantity = (item, newQuantity) => {
//     const updatedCartItems = cartItems.map((cartItem) => {
//       if (cartItem.id === item.id) {
//         return { ...cartItem, quantity: newQuantity };
//       }
//       return cartItem;
//     });
//     setCartItems(updatedCartItems);
//   };

//   // Function to calculate the total cost of all items in the cart
//   const calculateTotal = () => {
//     return cartItems.reduce((total, cartItem) => {
//       return total + (cartItem.price * cartItem.quantity);
//     }, 0);
//   };

//   return (
//     <>
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <div>
//             {cartItems.map((cartItem) => (
//               <CartItem
//                 key={cartItem.id}
//                 item={cartItem}
//                 removeFromCart={handleRemoveFromCart}
//                 updateQuantity={handleUpdateQuantity}
//               />
//             ))}
//           </div>
//           <div>
//             <p>Total: ${calculateTotal()}</p>
//             <CheckoutButton />
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default CartPage;


// import React from 'react';

// function Cart({ cartItems, removeFromCart }) {
//   const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   function handleRemoveItem(item) {
//     removeFromCart(item);
//   }
  

//   return (
//     <div>
//       <h1>Cart</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Total</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((item) => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>{item.price}</td>
//               <td>{item.quantity}</td>
//               <td>{item.price * item.quantity}</td>
//               <td>
//                 <button onClick={() => handleRemoveItem(item)}>Remove</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td colSpan="3">Total:</td>
//             <td>{cartTotal}</td>
//             <td></td>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//   );
// }

// export default Cart;
