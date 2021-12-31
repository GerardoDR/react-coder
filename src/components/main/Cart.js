import { useContext } from "react"
import { QuantityContext } from "../../context/QuantityProvider.js"

const Cart = () => {
    const {quant} = useContext(QuantityContext)
    return(
    <div className="mt">
        <p>Soy carrito</p>
        <p>Cantidad: {quant}</p>
    </div>
    )
}

export default Cart