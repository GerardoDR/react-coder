import React from "react"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import "./styles/App.scss"
import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import ItemDetailContainer from "./components/main/itemDetail/ItemDetailContainer"
// import ItemListContainer from "./components/main/itemList/ItemListContainer"


const App = () => {
    
    const links = [
        { href: "/products", name: "productos", id: 1 },
        { href: "/sale", name: "ofertas", id: 2 },
        { href: "/contact", name: "contacto", id: 3 },
        { href: "/about", name: "sobre nosotros", id: 4 }
    ]

    return (
        <BrowserRouter>
            <Header title={"Mi tienda"} links={links}/>
                <Routes>
                    <Route path="/" element=""/>
                    <Route path="/products" element={<Main/>}/>
                    <Route path="/sale" element={<Main/>}/>
                    <Route path="/contact" element=""/>
                    <Route path="/about" element=""/>
                    <Route path="/product/:id" element={<Main/>}/>
                </Routes>
            <Main/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App