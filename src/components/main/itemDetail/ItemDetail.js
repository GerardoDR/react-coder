import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ItemCount from "./ItemCount";
import "react-toastify/dist/ReactToastify.min.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartProvider";

const ItemDetail = ({ prod }) => {

  const [buy, setBuy] = useState(false)

  const { toCart } = useContext(CartContext)

  const onAdd = (count) => {

    toast.success(`items agregados: ${count} ${prod.name}`, {
      theme: "dark",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      className: "toastAdd",
    });

    // setQuantity(cont)
    setBuy(true)
    toCart(prod,count)
  };

  const addFail = () => {
    toast.warn("La cantidad deseada supera el stock", {
      theme: "dark",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      className: "toastAdd",
    });
  };

  return (
    <div className="itemDetailContainer">
      <div className="details">
        <h2>{prod.name}</h2>
        <p>Precio: $ {prod.price}</p>
      </div>
      <img src={prod.img} alt={prod.name}/>
      {buy
      ? <Link to="/cart"><button>Terminar compra</button></Link>
      : <ItemCount stock={10} initial={1} onAdd={onAdd} addFail={addFail}/>
      }
      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
