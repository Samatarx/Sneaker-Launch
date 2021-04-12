import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/Home">SN</Link>
      <Link to="/Inspiration">Inspo</Link>
      <Link to="/Preorder">Preorder</Link>
    </nav>
  );
}

export default Nav;
