import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const Nav = ({links}) => {
  return (
    <nav className="nav">
      {links.map((el, i) => {
        return <NavLink key={`link${el.id}`} to={el.href}>{el.name}</NavLink>
      })}
      <NavLink to="/cart"><CartWidget /></NavLink>
    </nav>
  );
};

export default Nav;
