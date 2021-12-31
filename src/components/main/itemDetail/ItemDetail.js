import React from "react";
import { ToastContainer, toast } from "react-toastify";
import ItemCount from "./ItemCount";
import "react-toastify/dist/ReactToastify.min.css";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";

const ItemDetail = ({ prod }) => {

  const [compra, setCompra] = useState(false)
  const [cantidad, setCantidad] = useState(0)

  const onAdd = (cont) => {

    toast.success("items agregados:  " + cont, {
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
    setCantidad(cont)
    setCompra(true)
    //context para guardar "cantidad"?
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
      {compra
      ? <Link to="/cart"><button>Terminar compra</button></Link>
      : <ItemCount stock={10} initial={1} onAdd={onAdd} addFail={addFail}/>
      }
      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
