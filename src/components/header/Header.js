import Nav from "./Nav";
import React,{ useContext } from "react";
import { NavLink } from "react-router-dom";
import { ModalContext } from "../../context/ModalProvider"
import SignIn from "./SignIn";

const Header = ({ title, links }) => {
  const { signIn, setSignIn } = useContext(ModalContext);

  const handleSignInOpen = () => {
    setSignIn(true);
  };
  
  return (
    <header className="header">
      <NavLink to="/"><h1>{title}</h1></NavLink>
      <Nav links={links} />
      <div className="modals">
        <button onClick={handleSignInOpen}>Sign in</button>
      </div>
      <SignIn signIn={signIn} setSignIn={setSignIn}/>
    </header>
  );
};

export default Header;
