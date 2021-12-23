import React from "react";
import { Link } from "react-router-dom";

const Item = ({id, name, price, img}) => {

  return (
    <div className="item">
        <h3>{name}</h3>
        <img className="itemImg" src={img}/>
        <div className="cardFooter">
          <p>Precio: $ {price}</p>
          <Link to={`/product/${id}`}><button>Ver Detalles</button></Link>
        </div>
    </div> 
  );
};

export default Item;
