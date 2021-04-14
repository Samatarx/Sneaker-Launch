import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar expand='lg' collapseOnSelect  style={{backgroundColor:'#96C0DF', color:'#fff'}}>
      <LinkContainer to="/" style={{color:'#fff'}}>
        <Navbar.Brand >Sneaker drop</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav >
          <LinkContainer style={{color:'#fff'}} to="/Inspiration">
            <Nav.Link>Inspo</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer style={{color:'#fff'}} to="/Preorder">
            <Nav.Link>Preorder</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
