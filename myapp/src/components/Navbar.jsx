import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.jpg';
import cart from '../images/cart.jpg';

function NavigationBar() {
  
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <a>
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="My Website Logo"
          />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="/Products">Products</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="/Home">
      <Nav.Link href="/cart">
        <img
            src={cart}
            height="30"
            className="d-inline-block align-top"
            alt="My Website Logo"
          />
      </Nav.Link>
      </Navbar.Brand>
    </Navbar>
  );
}

export default NavigationBar;
