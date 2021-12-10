//Crea un componente contenedor ItemListContainer.js con una prop greeting, y muestra el mensaje dentro del contenedor con el styling integrado
import React from 'react'
import "../../styles/_main.scss"
import ItemCount from './ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



const ItemListContainer = (props) => {
    
    const onAdd = (cont) =>{
        toast.success("items agregados:  "+cont, {
            theme: "dark",
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            className: "toastAdd"
        });
    }
    return (
        <div className="itemListContainer">
            <p>{props.greeting}</p><span className="material-icons">waving_hand</span>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            <ToastContainer/>
        </div>
    )
}

export default ItemListContainer
