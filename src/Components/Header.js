import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../Styling/Header.css";

function Header() {
  return (
    <Navbar expand="lg" collapseOnSelect className="header-navbar">
      <LinkContainer className="header-logo" to="/">
        <Navbar.Brand>Sneaker drop</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end header-collapse"
      >
        <Nav>
          <LinkContainer to="/Heritage">
            <Nav.Link>
              <span className="header-link">Heritage</span>
            </Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to="/Preorder">
            <Nav.Link>
              <span className="header-span">Preorder</span>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
