import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {

    const [signIn, setSignIn] = useState(false)

    let modalVal={
        signIn,
        setSignIn,
    }

    return (
        <ModalContext.Provider value={modalVal}>{children}</ModalContext.Provider>
      );
}

export default ModalProvider;
