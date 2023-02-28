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
    if (currentQuantity === 0) {
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
    <Container>
      <Row lg="3" md="4" sm="6" xs="12">
        
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
        
        
      </Row>
    </Container>
  );
};

export default CartItem;

