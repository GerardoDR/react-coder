import React from "react";
import { CartContext } from "../../context/CartProvider";
import { useContext } from "react";


const CartWidget = () => {
  const  { totalQuant } = useContext(CartContext)
  return (
    <>
      <span className="material-icons">shopping_cart</span>{totalQuant}
    </>
    );
  
};
export default CartWidget;