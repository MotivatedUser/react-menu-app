import React, { useState } from "react";
import { Col, Row, Container } from "reactstrap";

const CartItem = ({
  item,
  index,
  handleRemoveFromCart,
  handleUpdateQuantity,
  quantity,
}) => {
  const [currentQuantity, setQuantity] = useState(quantity);

  const handleDecreaseQuantity = () => {
    if (currentQuantity === 1) {
      return;
    }
    setQuantity(currentQuantity - 1);
    handleUpdateQuantity(item, index, currentQuantity - 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(currentQuantity + 1);
    handleUpdateQuantity(item, index, currentQuantity + 1);
  };

  const handleRemove = () => {
    handleRemoveFromCart(item, index);
  };

  return (
    <Container className="Cart-body">
      <Row>
        <Col>
          <div className="cart-item">
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <img alt="" className="cartImage" src={item.image} />
              <p>Quantity: {currentQuantity}</p>
              <p>Price: ${item.price * currentQuantity}</p>
              <button
                className="cart-item-remove-button"
                onClick={handleRemove}
              >
                Remove
              </button>
            </div>
            <div className="cart-item-quantity">
              <button onClick={handleDecreaseQuantity}>-</button>
              <span>{currentQuantity}</span>
              <button onClick={handleIncreaseQuantity}>+</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
console.log(CartItem);
export default CartItem;
