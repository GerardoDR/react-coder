import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  let {id} = useParams()

  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(true)
  
  const getItem = () => {
    fetch("https://e091d3aa-c5f9-4c9f-91e8-06bdccb48e30.mock.pstmn.io/products")
    .then(res => res.json())
    .then(res => {
      let data = res.find((prod) => prod.id === Number(id));
      setLoading(false)
      setSelected(data);
    })
  };

  useEffect(() => getItem(),[id])
  
  if(loading){
    return <h2 className="mt">CARGANDO...</h2>
  } else {
    return <ItemDetail prod={selected}/>
  }
};

export default ItemDetailContainer;