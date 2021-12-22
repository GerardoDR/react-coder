import React from "react";
import { useState } from "react";


const ItemCount = ({stock, initial, onAdd, addFail}) => {
  
  const [contador, setContador] = useState(initial);

  const sum = () => setContador(contador + 1);

  const rest = () => contador > 1 ? setContador(contador - 1) : console.log("el contador no puede adquirir valor menor a 1");

  const agregar = () => {
    if (contador <= stock) {
      onAdd(contador);
      setContador(initial);
    } else {
      addFail();
    }
  };

  return (
    <div className="contador">
      <span>{contador}</span>
      <div>
        <button onClick={rest}>-</button>
        <button onClick={agregar}>Agregar</button>
        <button onClick={sum}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;
