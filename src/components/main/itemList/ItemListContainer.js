import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.js";

const ItemListContainer = ({products,greeting}) => {
  
  let [list, setList] = useState([]);

  let {category} = useParams()

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        if(!category){
            res(products)
          } else {
            res(products.filter((prod) => prod.category == category))
          }
      }, 2000);
    });
    promesa.then((prods) => {
      setList(prods);
    });
  }, [category]);


  return (
    <div className="itemListContainer">
      <p>{greeting}</p>
      <ItemList list={list}/>
    </div>
  );
};

export default ItemListContainer;
