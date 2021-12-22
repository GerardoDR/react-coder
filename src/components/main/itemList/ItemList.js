import React from "react";
import Item from "./Item.js";

const ItemList = ({list}) => {
  return (
    <div className="listaProds">
      {list.map((prod) => {
          return <Item key={"list"+prod.id} id={prod.id} name={prod.name} price={prod.price}/>
      })}
    </div>
  );
};

export default ItemList;
