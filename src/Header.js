import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar bg='light' expand='lg' >
      <LinkContainer to="/">
        <Navbar.Brand>Sneaker drop</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav >
          <LinkContainer to="/Inspiration">
            <Nav.Link>Inspo</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to="/Preorder">
            <Nav.Link>Preorder</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
