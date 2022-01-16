import React from "react";
import Item from "./Item.js";

const ItemList = ({ list }) => {
  return (
    <div className="listaProds">
      {list.map((prod) => {
        return (
          <Item
            key={prod.fid}
            fid={prod.fid}
            name={prod.name}
            price={prod.price}
            img={prod.img}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
