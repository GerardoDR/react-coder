import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import ItemList from "./ItemList.js";



const ItemListContainer = ({products,greeting}) => {
  
  let [list, setList] = useState([]);

  const resultado = useParams()
  console.log(resultado)

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    });
    promesa.then((prods) => {
      setList(prods);
    });
  }, []);


  return (
    <div className="itemListContainer">
      <p>{greeting}</p>
      <ItemList list={list}/>
    </div>
  );
};

export default ItemListContainer;
