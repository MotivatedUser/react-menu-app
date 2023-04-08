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
import Fish  from '../images/Fish.webp';

import { faCreditCard, faHome, faStar, faUtensils } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark expand="md" className="header">
      <NavbarBrand className="navbar-brand d-flex align-items-center justify-content-center" href="/" style={{ width: '100%' }}>
        <img
          src={Fish}
          alt="React logo"
          className="float-start App-logo"
          style={{ height: 100, width: 180, borderRadius: 40 }}
        />
      </NavbarBrand>

    <Container>
        <Row className="nav-author">
        <p className="links-container" >
          A Mock Ordering App by Doug Altermatt
          </p>
          <p>
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
      
      <NavbarToggler className="custom-toggler" onClick={() => setMenuOpen(!menuOpen)} />

      <Collapse isOpen={menuOpen} navbar>
        <Nav className="d-flex align-items-center justify-content-center">
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
