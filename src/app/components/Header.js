import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem, 
  Row, 
  Container
} from "reactstrap";
import "../../App.css";
import { NavLink } from "react-router-dom";

import logo from "../../logo.svg";
import { faCreditCard, faHome, faStar, faUtensils } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark expand="md" className="header">
      <NavbarBrand className="navbar-brand" href="/">
        <img
          src={logo}
          alt="React logo"
          className="float-start App-logo"
          style={{ height: 180, width: 180 }}
        />
      </NavbarBrand>

    <Container>
        <Row className="nav-author">
        <p className="links-container" >
          by Doug Altermatt |
          <a className="links" href="https://www.linkedin.com/in/d-altermatt-motivated-user/">
            LinkedIn
          </a>{" "}
          |<a className="links" href="https://github.com/MotivatedUser">GitHub</a> |
          <a className="links" href="tel:+15094815800">(509)481-5800</a>
        </p>
        </Row>

        <Row className="nav-title" >
        <h1 className="header-title" >The Codfather's Oceanic Eats</h1>
        <h4 className="header-subtitle" >Reel-y good seafood at The Codfather's.</h4>
        </Row>
    </Container>
      
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto">
          <NavItem className="nav-item" >
            <NavLink className="nav-link" to="/">
                <FontAwesomeIcon icon={faHome} /> Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
                <FontAwesomeIcon icon={faStar} /> About
            </NavLink>
            <NavLink className="nav-link" to="/menu">
                <FontAwesomeIcon icon={faUtensils} /> Menu
            </NavLink>
            <NavLink className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faCreditCard} /> Cart
            </NavLink>
            <NavLink className="nav-link" to="/checkout">
              Checkout testing
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
