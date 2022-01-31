import { createContext, useState } from "react";
import SignIn from "../components/header/SignIn";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {

    const [signIn, setSignIn] = useState(false)
    const [signUp, setSignUp] = useState(false)

    let modalVal={
        signIn,
        setSignIn,
        signUp,
        setSignUp
    }

    return (
        <ModalContext.Provider value={modalVal}>{children}</ModalContext.Provider>
      );
}

export default ModalProvider;
