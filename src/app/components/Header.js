import { useState } from "react";
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from '../../logo.svg'

const Header = () => {
    const [ menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark expand='md' className='header' > 
            <NavbarBrand className='navbar-brand' href='/' >
                <img src={logo} alt="React logo" className='float-start App-logo' style={{ height: 180, width: 180 }} />
            </NavbarBrand>

            
            <p>
                by Doug Altermatt |
                <a href="https://www.linkedin.com/in/d-altermatt-motivated-user/">
                LinkedIn
                </a>{" "}
                |<a href="https://github.com/MotivatedUser">GitHub</a> |
                <a href="tel:+15094815800">(509)481-5800</a>
            </p>
            <h1>The Codfather's Oceanic Eats</h1>
            <h4>Reel-y good seafood at The Codfather's.</h4>
            

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' >
                <NavItem>
                    <NavLink className='nav-link' to='/'>
                    <i className='fa fa-home fa-lg' /> Home
                    </NavLink>
                    <NavLink className='nav-link' to='/aboutPage'>
                    <i className='fa fa-star fa-lg' /> About Us
                    </NavLink>
                    <NavLink className='nav-link' to='/menuPage'>
                    <i className='fa fa-phone fa-lg' /> Menu
                    </NavLink>
                    <NavLink className='nav-link' to='/checkoutPage'>
                    <i className='fa fa-clipboard fa-lg' /> Checkout
                    </NavLink>
                </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default Header;