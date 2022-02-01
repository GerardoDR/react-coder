import React from 'react';
import { signInWithGoogle, signInWithEmail } from "../../firebase"

const SignIn = ({signIn, setSignIn}) => {

  let email
  let password

  const handleModalClose = (e) => {
    
    if (e.target.className !== 'modal-bg') {
      return;
    } else {
      setSignIn(false);
    }
  };

  const mail = (e) => email = e.target.value

  const pwd = (e) => password = e.target.value

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