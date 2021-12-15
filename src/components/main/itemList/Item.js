import React from "react";

const Item = (props) => {

  const selectItem = () => {
  sessionStorage.setItem('ItemSelectionID', props.id)
  console.log(props.id)
}

  return (
    <div className="item">
        <h3>{props.name}</h3>
        <p>Precio: $ {props.price}</p>
        <button onClick={selectItem}>Ver detalles</button>
    </div>
  );
};

export default Item;
