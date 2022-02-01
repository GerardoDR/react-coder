import React from 'react';
import { signInWithGoogle } from "../../firebase"

const SignIn = ({signIn, setSignIn}) => {

  const handleModalClose = (e) => {

    const currentClass = e.target.className;
    
    if (currentClass === 'modal-card') {
      return;
    } else {
      setSignIn(false);
    }
  };

  return  (
    <div hidden={!signIn}>
      <div className="modal-bg" onClick={handleModalClose}>
        <div className="modal-card">
          <button onClick={signInWithGoogle}>Usar Google</button>
        </div>
      </div>
    </div>
  )
};

export default SignIn;