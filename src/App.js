import React from "react"
import Header from "./components/header/Header"
import ItemDetailContainer from "./components/main/itemDetail/ItemDetailContainer"
import ItemListContainer from "./components/main/itemList/ItemListContainer"
import About from "./components/main/About"
import Contact from "./components/main/Contact"
import Footer from "./components/footer/Footer"
import Cart from "./components/main/Cart"
import products from "./components/stock.json"
import "./styles/App.scss"
import { BrowserRouter, Routes,Route } from 'react-router-dom'


const App = () => {
    
    const links = [
        { href: "/home", name: "home", id: 1 },
        { href: "/category/outlet", name: "outlet", id: 2 },
        { href: "/category/sale", name: "ofertas", id: 3 },
        { href: "/contact", name: "contacto", id: 4 },
        { href: "/about", name: "sobre nosotros", id: 5 }
    ]

    
    return (
        <BrowserRouter>
            <Header title={"Mi tienda"} links={links}/>
                <main>
                    <Routes>
                        <Route path="/" element={<ItemListContainer products={products} greeting={"ACA VA EL HERO"} />}/>
                        <Route path="/home" element={<ItemListContainer products={products} greeting={"ACA VA EL HERO"} />}/>
                        <Route path="/category/:category" element={<ItemListContainer products={products} greeting={"ACA VA EL HERO"} />}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/product/:id" element={<ItemDetailContainer/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>
                </main>
            <Footer/>
        </BrowserRouter>
    )
}

export default App