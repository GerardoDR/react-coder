import React from 'react';
import { signInWithGoogle } from "../../firebase"

const SignIn = ({signIn, setSignIn}) => {

  const handleModalClose = (e) => {
    
    if (e.target.className !== 'modal-bg') {
      return;
    } else {
      setSignIn(false);
    }
  };

  return  (
    <div hidden={!signIn}>
      <div className="modal-bg" onClick={handleModalClose}>
        <div className="modal-card">
          <button onClick={signInWithGoogle}>Iniciá sesión con Google</button>
        </div>
      </div>
    </div>
  )
};

export default SignIn;