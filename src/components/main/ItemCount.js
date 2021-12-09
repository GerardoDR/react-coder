import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ItemCount = (props) => {


    let [contador, setContador] = useState(props.initial)

    const sum = () => {
        setContador(contador+1)
    }

    const rest = () => {
        if(contador > 1){
            setContador(contador-1)
        }
    }

    const onAdd = () =>{
        if(contador <= props.stock){
            toast.success(contador+" items agregados!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                });
        }
    }

    return(

<div className="contador">
    <span>{contador}</span>
    <div>
        <button id="res1" onClick={rest}>-</button>
        <button  id="add1" onClick={onAdd}>Agregar</button>
        <button id="sum1" onClick={sum}>+</button>
    </div>
    <ToastContainer/>
</div>

    )
}

export default ItemCount