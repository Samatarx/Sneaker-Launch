import React from "react";
import { Navbar } from "react-bootstrap";

function Footer() {
  return (
    <Navbar expand="lg" fixed="bottom" style={{ backgroundColor: "#96C0DF", maxWidth:'auto' }}>
      <footer className="mx-auto">
        <div style={{ textAlign: "center", margin: "0" }}>
          <p style={{ color: "#fff", margin: "0" }}>
            Air Jordan 1 University Blue will drop in
          </p>
          <p style={{ backgroundColor: "#fff", color: "#000" }}>00:00:00</p>
        </div>
      </footer>
    </Navbar>
  );
}

export default Footer;
