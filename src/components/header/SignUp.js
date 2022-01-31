import React from 'react';

const SignUp = ({signUp, setSignUp}) => {

  const handleModalClose = (e) => {
    
    const currentClass = e.target.className;
    
    if (currentClass === 'modal-card') {
      return;
    } else {
      setSignUp(false);
    }
  };

  return  (
    <div hidden={!signUp}>
      <div className="modal-bg" onClick={handleModalClose}>
        <div className="modal-card">
          Sign up
        </div>
      </div>
    </div>
  )
};

export default SignUp;