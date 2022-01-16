import React from "react";
import { Link } from "react-router-dom";

const Item = ({ fid, name, price, img }) => {
  return (
    <div className="item">
      <h3>{name}</h3>
      <img className="itemImg" src={img} alt={name} />
      <div className="cardFooter">
        <p>Precio: $ {price}</p>
        <Link to={`/product/${fid}`}>
          <button>Ver Detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
