import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider.js";
import { col } from "../../firebase";
import { addDoc, serverTimestamp } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, totalPrice, delFromCart, emptyCart } = useContext(CartContext);

  const commitSale = () => {
    const salesCollection = col
    addDoc(salesCollection, {
      buyer: {
        name: "pirulo",
        phone: 1122223333,
        mail: "pirulo@mail.com",
      },
      items: cart.map((prod) => {
        return {
          name: prod.name,
          price: prod.price,
          quantity: prod.quantity,
        };
      }),
      date: serverTimestamp(),
      total: totalPrice,
    })
      .then((res) => {
        console.log(res.id);
        toast.success(
          `Tu compra ya está en camino!\nÉste es su código de seguimiento: ${res.id}`,
          {
            theme: "dark",
            position: "top-right",
            autoClose: 2000,
            className: "toastAdd",
          }
        );
        emptyCart();
      })
      .catch((err) => console.log(err));
  };

  if (cart.length > 0) {
    return (
      <div className="cartBody mt">
        {cart.map((prod) => {
          return (
            <div key={"cart" + prod.id} className="cartItem">
              <p>{prod.name}</p>
              <p>Precio: ${prod.price}</p>
              <p>x{prod.quantity}</p>
              <button
                onClick={(e) => {
                  delFromCart(prod.id);
                }}
              >
                X
              </button>
            </div>
          );
        })}
        <h3>Total: ${totalPrice}</h3>
        <button onClick={commitSale}>Finalizar compra</button>{" "}
        <button onClick={emptyCart}>Vaciar Carrito</button>
      </div>
    );
  } else {
    return (
      <div className="mt">
        <p>El carrito está vacío</p>
        <Link to="/">
          <button>Volver a home</button>
        </Link>
      </div>
    );
  }
};

export default Cart;
