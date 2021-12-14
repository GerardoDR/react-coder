import React from 'react'
import ItemCount from './ItemCount.js'
const Item = (props) => {
    console.log("props a item.js: ")
    console.log(props)
    return (
    <>
        {props.listProds.map( (prod) => (
            <div key={prod.id}>
                <h3>{prod.name}</h3>
                <p>Precio: {prod.price}</p>
                <ItemCount stock={10} initial={1} onAdd={props.onAdd}/>
            </div>
            ))
        }
    </>
    )
}

export default Item
