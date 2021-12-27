import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.js";

const ItemListContainer = ({products,greeting}) => {

  const [loading, setLoading] = useState (true)

  let [list, setList] = useState([]);

  let {category} = useParams()

  useEffect(() => {
      fetch("https://e091d3aa-c5f9-4c9f-91e8-06bdccb48e30.mock.pstmn.io/products")
      .then(res => res.json())
      .then(res => {
        setLoading(false)
        if(!category){
          setList(res)
        } else {
          setList(res.filter((prod) => prod.category === category))
        }
      }          
      )}, [category]);

  if(loading){

    return <h2 className="mt">CARGANDO...</h2>;

  } else {
    return (
      <div className="itemListContainer">
        <p>{greeting}</p>
        <ItemList list={list}/>
      </div>
    );
  }
  
};

export default ItemListContainer;
