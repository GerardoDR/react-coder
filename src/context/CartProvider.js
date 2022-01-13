import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {
    
    const [cart,setCart] = useState([])
    const [totalQuant, setTotalQuant] = useState(0)

    const toCart = (product, quantity) => {

        let alreadyInCart = cart.find((prod) => prod.id === product.id)

        if(alreadyInCart){

            let cartCopy = [...cart]
            let found = cartCopy.find((prod) => prod.id === product.id)
            console.log(found)
            found.quantity += quantity
            setCart(cartCopy)

        } else {
            product.quantity = quantity
            setCart([...cart,product])
        }
        setTotalQuant(totalQuant+quantity)
    }

    const delFromCart = (id) => {
        const deleting = cart.find((prod) => prod.id === id)
        const i = cart.indexOf(deleting,0)
        const minus = cart[i].quantity
        setTotalQuant(totalQuant - minus)
        const cartCopy = [...cart]
        cartCopy.splice(i,1)
        setCart(cartCopy)
    }
    


    const emptyCart = () => {
        setCart([])
        setTotalQuant(0)
    }

    const cartVal = {
        cart,
        totalQuant,
        toCart,
        delFromCart,
        emptyCart
    }

    return (
        <CartContext.Provider value={cartVal}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider