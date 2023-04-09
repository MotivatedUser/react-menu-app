import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const MenuCard = ({ item, handleAddToCart }) => {
  const { name, type, calories, price, image, disclaimer } = item;

  return (
    <Card className="menu-card">
      <CardImg top width="100%" src={image} alt={name} className='menu-card-image' />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{type}</CardSubtitle>
        <p>Calories: {calories}</p>
        <p>Price: ${price.toFixed(2)}</p>
        {disclaimer && <p className="text-danger">{disclaimer}</p>}
        <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
      </CardBody>
    </Card>
  );
};

export default MenuCard;
