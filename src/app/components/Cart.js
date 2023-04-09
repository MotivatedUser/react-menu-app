import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import CartItem from "./CartItem";
import GoToCheckoutButton from "./GoToCheckoutButton";
import { CartContext } from "./CartContent";

const Cart = () => {
  const [cartItems, setCartItems] = useContext(CartContext);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, [setCartItems]);

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
    }, 0).toFixed(2);
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
        <Container className="App-body">
          <Row>
            <Col xs="12" md="8" >
              
                {cartItems.map((cartItem) => (
                  <CartItem
                    key={cartItem.id}
                    item={cartItem}
                    handleRemoveFromCart={removeItemFromCart}
                    handleUpdateQuantity={updateItemQuantity}
                  />
                ))}
                </Col>
                <Col xs="12" md="4" >
                <div className="cart-total">
                  <p className="left" >Subtotal: ${calculateTotal()}</p>
                  <GoToCheckoutButton />
                </div>
              
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Cart;
