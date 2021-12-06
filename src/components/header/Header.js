import "./header.scss"

import Nav from "./Nav"

import React from 'react'


const Header = (props) => {
    return (
<>
    <header className="header">
        <h1>{props.title}</h1>
        <Nav/>
    </header>
</>

    )
}

export default Header
