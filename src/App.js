import React from "react";
import Header from "./components/header/Header";
import ItemDetailContainer from "./components/main/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/main/itemList/ItemListContainer";
import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Footer from "./components/footer/Footer";
import Cart from "./components/main/Cart";
import PageNotFound from "./PageNotFound";
import CartProvider from "./context/CartProvider";
import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const App = () => {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"ACA VA EL HERO"} />}
              />
            <Route
              path="/home"
              element={<ItemListContainer greeting={"ACA VA EL HERO"} />}
              />
            <Route
              path="/category/:category"
              element={<ItemListContainer greeting={"ACA VA EL HERO"} />}
              />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <ToastContainer />
        </main>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
