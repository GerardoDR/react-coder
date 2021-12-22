import React from "react"
import Header from "./components/header/Header"
import ItemDetailContainer from "./components/main/itemDetail/ItemDetailContainer"
import ItemListContainer from "./components/main/itemList/ItemListContainer"
import About from "./components/main/About"
import Contact from "./components/main/Contact"
import Footer from "./components/footer/Footer"
import products from "./components/stock.json"
import "./styles/App.scss"
import { BrowserRouter, Routes,Route } from 'react-router-dom'


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
                <main>
                    <Routes>
                        <Route path="/" element={<ItemListContainer key={"ItemListContainer1"} products={products} greeting={"ACA VA EL HERO"} />}/>
                        <Route path="/products" element={<ItemListContainer key={"ItemListContainer1"} products={products} greeting={"ACA VA EL HERO"} />}/>
                        <Route path="/sale" element={<ItemListContainer key={"ItemListContainer1"} products={products} greeting={"ACA VA EL HERO"} />}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/product/:id" element={<ItemDetailContainer key={"ItemDetailContainer1"} products={products}/>}/>
                    </Routes>
                </main>
            <Footer/>
        </BrowserRouter>
    )
}

export default App