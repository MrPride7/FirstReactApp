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
        <li className={h("link-wrap")}>
          <Link className={h("link")} to="/">Home</Link>
        </li>
        <li className={h("link-wrap")}>
          <Link className={h("link")} to="/news">News</Link>
        </li>
        <li className={h("link-wrap")}>
          <Link className={h("link")} to="/notes">Notes</Link>
        </li>
      </nav>
    </header>
  )
};

export default Header;
