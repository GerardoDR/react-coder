import React from "react";
import Item from "./Item.js";

const ItemList = (props) => {
  return (
    <div className="listaProds">
      {props.list.map((prod) => {
          return <Item key={"list"+prod.id} id={prod.id} name={prod.name} price={prod.price} onAdd={props.onAdd} addFail={props.addFail}/>
      })}
    </div>
  );
};

export default ItemList;
