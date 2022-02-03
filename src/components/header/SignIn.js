import React, { useContext } from "react";
import { googleAuth } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { CartContext } from "../../context/CartProvider.js";

const SignIn = ({ show, setShow }) => {
  const { setSigned , setUser} = useContext(CartContext);

  const { auth, providerG } = googleAuth

  const signInWithGoogle = () => {
    signInWithPopup(auth, providerG)
      .then((userData) => {
        setUser({
          name:userData.user.displayName,
          phone:userData.user.phoneNumber,
          email:userData.user.email,
          photo:userData.user.photoURL
        })
        setSigned(true)
        setShow(false)
      })
      .catch((error) => console.log(error));
  };

  const handleModalClose = (e) => {
    if (e.target.className !== "modal-bg") {
      return;
    } else {
      setShow(false);
    }
  };

  if(show){
    document.body.style.overflowY="hidden"
  } else {
    document.body.style.overflowY=""
  }

  return (
    <div hidden={!show}>
      <div className="modal-bg" onClick={handleModalClose}>
        <div className="modal-card">
          <button onClick={signInWithGoogle} className="googlebtn">
            Iniciá sesión con Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
