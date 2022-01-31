import Nav from "./Nav";
import React,{ useContext } from "react";
import { NavLink } from "react-router-dom";
import { ModalContext } from "../../context/ModalProvider"
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Header = ({ title, links }) => {
  const { signIn, setSignIn, signUp, setSignUp   } = useContext(ModalContext);

  const handleSignInOpen = () => {
    setSignIn(true);
  };
  const handleSignUpOpen = () => {
    setSignUp(true);
  };
  
  return (
    <header className="header">
      <NavLink to="/"><h1>{title}</h1></NavLink>
      <Nav links={links} />
      <div className="modals">
        <button onClick={handleSignInOpen}>Sign in</button>
        <button onClick={handleSignUpOpen}>Sign up</button>
      </div>
      <SignIn signIn={signIn} setSignIn={setSignIn}/>
      <SignUp signUp={signUp} setSignUp={setSignUp}/>
    </header>
  );
};

export default Header;
