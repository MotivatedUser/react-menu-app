import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import {
  tunaSandwich,
  catfish,
  salmonSteak,
  trout,
  walleyeSticks,
  perch,
  sturgeon,
  squid,
  twizzler,
} from "../features/MENU.js";
import {
  barbie,
  surprise,
  cheese,
  platter,
  crappie,
  salmonella,
} from "../features/APPETIZERS";
import {
  shrimp,
  cod,
  tuna,
  salmonSplash,
  tonic,
  ale,
} from "../features/DRINKS.js";
import { CartContext } from "../app/components/CartContent";
import StickyCartButton from "../app/components/StickyCartButton";
import MenuCard from "../app/components/MenuCard";

const MenuPage = () => {
  const [cartItems, setCartItems] = useContext(CartContext);

  const addItemToCart = (item) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item already exists, update its quantity
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      // If the item doesn't exist, add it with an initial quantity of 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleAddToCart = (item) => {
    addItemToCart(item);
  };

  return (
    <>
      <h5 className="links-container">
        <a href="#starter" className="links">
          Starter Menu
        </a>{" "}
        |
        <a href="#mainCourse" className="links">
          Main Dishes
        </a>{" "}
        |
        <a href="#drinks" className="links">
          Drink Menu
        </a>
      </h5>

      <Container>
      <h2 className="menuTitle" id="starter">
            Starter Menu
          </h2>
        <Row className="menu-card-container">
          {[
            barbie,
            surprise,
            cheese,
            platter,
            crappie,
            salmonella,
          ].map((item) => (
            <Col key={item.id} sm="12" md="6" lg="4">
              <MenuCard item={item} handleAddToCart={handleAddToCart} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <h2 className="menuTitle" id="mainCourse">
          Main Dishes
        </h2>
        <Row className="menu-card-container">
          {[
            tunaSandwich,
            catfish,
            salmonSteak,
            trout,
            walleyeSticks,
            perch,
            sturgeon,
            squid,
            twizzler,
          ].map((item) => (
            <Col key={item.id} sm="12" md="6" lg="4">
              <MenuCard item={item} handleAddToCart={handleAddToCart} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
      <h2 className="menuTitle" id="drinks">
            Drink Menu
          </h2>
        <Row className="menu-card-container">
          {[
            shrimp,
            cod,
            tuna,
            salmonSplash,
            tonic,
            ale,
          ].map((item) => (
            <Col key={item.id} sm="12" md="6" lg="4">
              <MenuCard item={item} handleAddToCart={handleAddToCart} />
            </Col>
          ))}
        </Row>
      </Container>
      <StickyCartButton />
    </>
  );
};

export default MenuPage;
