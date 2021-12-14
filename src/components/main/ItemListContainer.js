import React, {useState, useEffect} from 'react'
import "../../styles/_main.scss"
import ItemList from './ItemList.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const products = [
    {id:1, name: 'escoba', price:1000},
    {id:2, name: 'esponja', price:100},
    {id:3, name: 'jabon', price:100},
    {id:4, name: 'lavandina', price:100},
    {id:5, name: 'balde', price:600},
    {id:6, name: 'secador', price:1000}
]

const ItemListContainer = (props) => {

    
    let [list,setList] = useState([])    

    useEffect(() => {
        const promesa = new Promise((res,rej) => {
            setTimeout(()=>{
                res(products)
            },2000)
        })
        promesa.then((prods)=> {
            console.log('response ok')
            console.log(prods)
            setList(prods)
        })
    },[])

    
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
            <ItemList prop1={list} onAdd={onAdd}/>
            <ToastContainer/>
        </div>
    )
}

export default ItemListContainer
