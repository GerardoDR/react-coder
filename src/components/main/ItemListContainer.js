//Crea un componente contenedor ItemListContainer.js con una prop greeting, y muestra el mensaje dentro del contenedor con el styling integrado

import React from 'react'
import "../../styles/_main.scss"

const ItemListContainer = (props) => {
    return (
        <div className="itemListContainer">
            <p>{props.greeting}</p><span class="material-icons">waving_hand</span>
        </div>
    )
}

export default ItemListContainer
