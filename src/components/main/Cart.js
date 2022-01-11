import { useContext } from "react"
import { CartContext } from "../../context/CartProvider.js"

const Cart = () => {
    const { cart, delFromCart, emptyCart, } = useContext(CartContext)
    console.log(cart)
    if(cart.length > 0){
        
        return(
            <div className="cartBody mt">
                {cart.map((prod)=>{
                    return (
                        <div key={prod.id} className="cartItem">
                            <p>{prod.name}</p>
                            <p>Precio: ${prod.price}</p>
                            <button onClick={delFromCart}>X</button>
                        </div>
                    )
                })}
                <button onClick={emptyCart}>Vaciar Carrito</button>
            </div>
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