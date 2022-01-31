import React from 'react';

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
          Sign in
        </div>
      </div>
    </div>
  )
};

export default SignIn;