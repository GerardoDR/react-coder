import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = ({ products }) => {

  let itemID = 6;

  const [selected, setSelected] = useState({});
  
  const getItem = () => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(products.find((prod) => prod.id === itemID));
      }, 2000);
    });
    promesa.then((prod) => {
      setSelected(prod);
    });
  }

  useEffect(() => getItem(),[itemID])

  return <ItemDetail prod={selected}/>
};

export default ItemDetailContainer;
