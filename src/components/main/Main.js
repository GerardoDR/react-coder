import React from "react";
import ItemListContainer from "./itemList/ItemListContainer";
import ItemDetailContainer from "./itemDetail/ItemDetailContainer";
import products from "../stock.json"
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Main = () => {
  return (
    <main className="main">
        <ItemListContainer key={"ItemListContainer1"} products={products} greeting={"ACA VA EL HERO"} />
        <ItemDetailContainer key={"ItemDetailContainer1"} products={products}/>
    </main>
  );
};
export default Main;