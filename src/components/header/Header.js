import React, { useState, useContext } from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartProvider.js";
import { signOut } from "firebase/auth";
import { googleAuth } from "../../firebase";
import SignIn from "./SignIn";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";


const Header = ({ title, links }) => {

  const [show, setShow] = useState(false);
  const { signed, setSigned, user, setUser } = useContext(CartContext);
  const { auth } = googleAuth
  
  const handleSignInOpen = () => {
    setShow(true);
  };

  const handleSignOut = () => {
    setSigned(false)
    signOut(auth)
    setUser({})
    toast.success(
      `Gracias por visitar EL OLIMPIO`,
      {
        theme: "dark",
        position: "top-right",
        autoClose: 2000,
        className: "toastAdd",
      }
    );
  }

  return (
    <header className="header">
      <NavLink to="/">
        <h1>{title}</h1>
      </NavLink>
      <Nav links={links} />
      <div className="modals">
        {signed?
        (<>
        <div className="userProfile">
          <img src={user.photo} id="userPhoto" alt="profile"/>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
        <button onClick={handleSignOut}>Cerrar Sesión</button>
        </>
        )
        
        :(<button onClick={handleSignInOpen}>
          <span className="material-icons">account_circle</span>
        </button>)}
      </div>
      <SignIn show={show} setShow={setShow} />
    </header>
  );
};

export default Header;
