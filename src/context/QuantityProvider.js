import { createContext, useState } from "react";

export const QuantityContext = createContext()

const QuantityProvider = ({children}) => {
    const [quant,setQuant] = useState(0)

    const toCart = (val) => setQuant(val)

    return (
        <QuantityContext.Provider value={{quant, toCart}}>
            {children}
        </QuantityContext.Provider>
    )
}

export default QuantityProvider