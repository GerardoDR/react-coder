import "./header.css"

import Nav from "./Nav"

import React from 'react'


const Header = (props) => {
    return (
<>
    <header>
        <h1>{props.title}</h1>
        <Nav/>
    </header>
</>

    )
}

export default Header
