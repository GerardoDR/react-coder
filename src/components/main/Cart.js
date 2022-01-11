import { useContext } from "react"
import { CartContext } from "../../context/CartProvider.js"

const Cart = () => {
    const { cart, delFromCart, emptyCart, } = useContext(CartContext)

    if(cart.lenght > 0){
        
        return(
            <>
                {cart.map((prod)=>{
                    return (
                        <div className="cartItem">
                            <p>{prod.name}</p>
                            <p>{prod.price}</p>
                            <button onClick={delFromCart}>X</button>
                        </div>
                    )
                })}
                <button onClick={emptyCart()}>vaciar carrito</button>
            </>
        )
    } else {
        return(
            <div className="mt">
                <p>El carrito está vacío</p>
            </div>
        )
    }
    
}

export default Cart