import React from "react";
import { Row, Col, Input } from "reactstrap";

const CartItem = ({
  item,
  handleRemoveFromCart,
  handleUpdateQuantity,
}) => {
  const { id, price, image, name, quantity } = item;

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      handleUpdateQuantity(item, newQuantity);
    }
  };

  return (
    <div className="cart-item mb-4">
      <Row>
        <Col xs="12" md="4">
          <img
            src={image}
            alt={name}
            className="cart-item-image img-fluid"
          />
        </Col>
        <Col xs="12" md="8">
          <h3>{name}</h3>
          <p>Price: ${price.toFixed(2)}</p>
          <label htmlFor={`quantity-${id}`}>Quantity:</label>
          <Input
            id={`quantity-${id}`}
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button onClick={() => handleRemoveFromCart(item)}>
            Remove
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
