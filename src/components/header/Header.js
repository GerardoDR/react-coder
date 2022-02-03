import React, { useState, useContext, useEffect } from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartProvider.js";
import { signOut } from "firebase/auth";
import { getDocs } from "firebase/firestore";
import { googleAuth, categories } from "../../firebase";
import SignIn from "./SignIn";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";


const Header = () => {

  const [show, setShow] = useState(false);
  const { signed, setSigned, user, setUser } = useContext(CartContext);
  const { auth } = googleAuth
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getDocs(categories)
      .then(({ docs }) => {

        const mapedCategories = docs.map((doc) => {
          const data = doc.data();
          const id = doc.id
          const categoryToLink = {
            id: id,
            ...data,
          };
          return categoryToLink
        })

        const linksWCategories = ([
          { href: "/home", name: "home", id: 1 },
          ...mapedCategories,
          { href: "/contact", name: "contacto", id: 2 },
          { href: "/about", name: "sobre nosotros", id: 3 },
        ])
        setLinks(linksWCategories)
      })
  }, [])

  const handleSignInOpen = () => {
    setShow(true);
    // document.body.style.overflowY="hidden"
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
        <div className="headerTitle">
          <h1>El Olimpio</h1>
          <h2>El favor de los Dioses en la limpieza de tu casa</h2>
        </div>
      </NavLink>
      <Nav links={links} />
      <div className="modals">
        {signed ?
          (<>
            <div className="userProfile">
              <img src={user.photo} id="userPhoto" alt="profile" />
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </div>
            <button onClick={handleSignOut}>Cerrar Sesión</button>
          </>
          )
          : (
            <button onClick={handleSignInOpen}>
              <span className="material-icons">account_circle</span>
            </button>
          )}
      </div>
      <SignIn show={show} setShow={setShow} />
    </header>
  );
};

export default Header;
