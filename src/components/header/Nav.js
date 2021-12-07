//En el directorio de tu proyecto, crea una carpeta dentro de src llamada “components”, que contenga a NavBar.js para crear una barra de menú simple.
//Brand (título/nombre de la tienda) - Un listado de categorías clickeables -Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia (opcional).

import React from 'react'
import CartWidget from './CartWidget'
import "../../styles/_header.scss"

const Nav = () => {
    return (

<nav className="nav">
    <ul>
        <li><a href="#!">Productos</a></li>
        <li><a href="#!">Ofertas</a></li>
        <li><a href="#!">Contacto</a></li>
        <li><a href="#!">Sobre nosotros</a></li>
        <li><CartWidget/></li>
    </ul>
    
</nav>

    )
}

export default Nav
