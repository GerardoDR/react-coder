//En el directorio de tu proyecto, crea una carpeta dentro de src llamada “components”, que contenga a NavBar.js para crear una barra de menú simple.
//Brand (título/nombre de la tienda) - Un listado de categorías clickeables -Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia (opcional).

import React from 'react'
import "./header.css"
import CartWidget from './CartWidget'

const Nav = () => {
    return (
<nav>
    <CartWidget/>
</nav>
    )
}

export default Nav
