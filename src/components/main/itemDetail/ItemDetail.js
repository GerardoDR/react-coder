import React from "react";
import { ToastContainer, toast } from "react-toastify";
import ItemCount from "./ItemCount";
import "react-toastify/dist/ReactToastify.min.css";

const ItemDetail = ({ prod }) => {
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
      <h2>{prod.name}</h2>
      <ItemCount stock={10} initial={1} onAdd={onAdd} addFail={addFail} />
      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
