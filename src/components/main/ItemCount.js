import React from 'react'
import { useState } from 'react'

const ItemCount = (props) => {


    const [contador, setContador] = useState(props.initial)

//consigna no especifica poner límite al contador, sino a la ejecución de onAdd
    const sum = () => setContador(contador+1);

    const rest = () => contador > 1 ? setContador(contador-1) : console.log('el contador no puede adquirir valor menor a 1')

    const agregar = () => { if(contador <= props.stock){
            props.onAdd(contador) 
            setContador(props.initial)
        } else{
            console.log('contador supera el stock, no se puede agregar el valor.')
        }
    }

    return (

<div className="contador">
    <span>{contador}</span>
    <div>
        <button onClick={rest}>-</button>
        <button onClick={agregar}>Agregar</button>
        <button onClick={sum}>+</button>
    </div>
</div>

    )
}

export default ItemCount