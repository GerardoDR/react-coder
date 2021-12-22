import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ products }) => {

  let {id} = useParams()

  const [selected, setSelected] = useState({});
  
  const getItem = () => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(products.find((prod) => prod.id == id));
      }, 2000);
    });
    promesa.then((prod) => {
      setSelected(prod);

    });
  }

  useEffect(() => getItem(),[id])

  return <ItemDetail prod={selected}/>
};

export default ItemDetailContainer;