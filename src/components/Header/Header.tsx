import React from "react";
import {Link} from "react-router-dom";
import "./Header.sass";
import bem from "../../bem.confing";

const h = bem("Header");

const Header = () => {
  return (
    <header className={h()}>
      <Link to="/" className={h("logo")}>Improvado</Link>
      <nav className={h("navigation")}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/News">News</Link>
        </li>
        <li>
          <Link to="/Notes">Notes</Link>
        </li>
      </nav>
    </header>
  )
};

export default Header;
