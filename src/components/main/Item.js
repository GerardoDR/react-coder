import React from "react";
import ItemCount from "./ItemCount.js";
const Item = (props) => {
  return (
    <div className="item" id={props.key}>
        <h3>{props.name}</h3>
        <p>{`Precio: $${props.price}`}</p>
        <ItemCount stock={10} initial={1} onAdd={props.onAdd} addFail={props.addFail}/>
    </div>
  );
};

export default Item;
