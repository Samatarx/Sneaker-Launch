import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar expand='lg' collapseOnSelect style={{borderBottom:'2px #96C0DF solid'}} >
      <LinkContainer to="/" style={{color:'#000'}}>
        <Navbar.Brand >Sneaker drop</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav >
          <LinkContainer style={{color:'#000'}} to="/Heritage">
            <Nav.Link>Heritage</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer style={{color:'#fff', backgroundColor:'#96C0DF', borderRadius:'5px',padding:'3px 5px'}} to="/Preorder">
            <Nav.Link>Preorder</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
