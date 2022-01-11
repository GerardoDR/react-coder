import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {

    // const [quant,setQuant] = useState(0)
    const [cart,setCart] = useState([])
    const [totalQuant, setTotalQuant] = useState(0)


    const toCart = (product, quantity) => {

        console.log(product,quantity)

        let alreadyInCart = cart.find((prod) => prod.id == product.id)

        console.log(alreadyInCart)

        if(alreadyInCart){

            let cartCopy = [...cart]
            let found = cartCopy.find((prod) => prod.id == product.id)
            console.log(found)
            found.quantity += quantity
            setTotalQuant(totalQuant+quantity)
            setCart(cartCopy)

        } else {
            product.quantity = quantity
            setCart([...cart,product])
            setTotalQuant(totalQuant+quantity)
            console.log(product)
            console.log(cart)
        }

    }

    const delFromCart = (i) =>{
        let cartCopy = [...cart]
        let minus = cartCopy[i].quantity
        setTotalQuant(totalQuant - minus)
        setCart(cartCopy.splice(i, 1))
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