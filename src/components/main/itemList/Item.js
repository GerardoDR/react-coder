import React from "react";

const Item = ({id, name, price}) => {

  const selectItem = () => {
  sessionStorage.setItem('ItemSelectionID',id)
  console.log(id)
}

  return (
    <div className="item">
        <h3>{name}</h3>
        <p>Precio: $ {price}</p>
        <button onClick={selectItem}>Ver detalles</button>
    </div>
  );
};

export default Item;
