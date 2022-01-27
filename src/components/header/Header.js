import Nav from "./Nav";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ title, links }) => {
  return (
      <header className="header">
        <NavLink to="/">
          <h1>{title}</h1>
        </NavLink>
        <Nav links={links} />
      </header>
  );
};

export default Header;