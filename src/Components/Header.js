import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar
      expand="lg"
      collapseOnSelect
      style={{ borderBottom: "2px #96C0DF solid" }}
    >
      <LinkContainer to="/" style={{ color: "#000" }}>
        <Navbar.Brand>Sneaker drop</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end"
        style={{ border: "none" }}
      >
        <Nav>
          <LinkContainer style={{ color: "#000" }} to="/Heritage">
            <Nav.Link  > <span style={{
                  color: "#000",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  padding: "3px 5px",
                }}> Heritage</span></Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to="/Preorder">
            <Nav.Link>
              <span
                style={{
                  color: "#fff",
                  backgroundColor: "#96C0DF",
                  borderRadius: "5px",
                  padding: "3px 5px",
                }}
              >
                Preorder
              </span>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
