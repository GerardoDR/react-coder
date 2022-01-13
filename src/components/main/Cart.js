import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartProvider.js"

const Cart = () => {

    const { cart, totalPrice, delFromCart, emptyCart } = useContext(CartContext)
    
    if(cart.length > 0){
        
        return(
            <div className="cartBody mt">
                {cart.map((prod)=>{

                    return (
                        <div key={'cart'+prod.id} className="cartItem">
                            <p>{prod.name}</p>
                            <p>Precio: ${prod.price}</p>
                            <p>x{prod.quantity}</p>
                            <button onClick={(e)=>{delFromCart(prod.id)}}>X</button>
                        </div>
                    )
                })}
                <h3>Total: ${totalPrice}</h3>
                <button onClick={emptyCart}>Vaciar Carrito</button>
            </div>
        )
    } else {
        return(
            <div className="mt">
                <p>El carrito está vacío</p>
                <Link to="/"><button>Volver a home</button></Link>
            </div>
        )
    }
    
}

export default Cart