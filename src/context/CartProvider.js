import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {

    // const [quant,setQuant] = useState(0)
    const [cart,setCart] = useState([])
    const [totalQuant, setTotalQuant] = useState(0)


    const toCart = (product, quantity) => {
        console.log(`desde toCart: ${product} y cantidad: ${quantity}`)
        let alreadyInCart = cart.find((prod) => prod.id === product.id)

        if(alreadyInCart){

            let cartCopy = [...cart]
            let found = cartCopy.find((prod) => prod.id == product.id)
            found.quantity += quantity
            // setTotalQuant(totalQuant+quantity)
            setCart(cartCopy)

        } else {
            const prodCopy = {...product}
            prodCopy.quantity = quantity
            setCart(...cart,product)
            // setTotalQuant(totalQuant+quantity)

        }

    }

    const delFromCart = (id) =>{
        let cartCopy = [...cart]
        let trash = cartCopy.id.indexOf(id)
        let minus = cartCopy[trash].quantity
        // setTotalQuant(totalQuant - minus)
        setCart(cartCopy.splice(trash, 1))
    }


    const emptyCart = () => setCart([])

    const cartVal = {
        cart,
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