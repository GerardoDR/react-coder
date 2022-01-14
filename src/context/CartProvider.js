import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {
    
    const [cart,setCart] = useState([])
    const [totalQuant, setTotalQuant] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const isInCart = (product) => cart.find((prod) => prod.id === product.id)

    const toCart = (product, quantity) => {

        if(isInCart(product)){

            let cartCopy = [...cart]
            let found = cartCopy.find((prod) => prod.id === product.id)
            found.quantity += quantity
            setCart(cartCopy)

        } else {
            product.quantity = quantity
            setCart([...cart,product])

        }

        setTotalPrice(totalPrice+(quantity*product.price))
        setTotalQuant(totalQuant+quantity)
    }

    const delFromCart = (id) => {
        const deleting = cart.find((prod) => prod.id === id)
        const i = cart.indexOf(deleting,0)
        const restQ = cart[i].quantity
        const restP = cart[i].price*restQ
        setTotalQuant(totalQuant - restQ)
        setTotalPrice(totalPrice - restP)
        const cartCopy = [...cart]
        cartCopy.splice(i,1)
        setCart(cartCopy)
    }
    


    const emptyCart = () => {
        setCart([])
        setTotalQuant(0)
        setTotalPrice(0)
    }

    const cartVal = {
        cart,
        totalQuant,
        totalPrice,
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