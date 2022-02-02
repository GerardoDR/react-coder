import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.js";
import { col } from "../../../firebase.js";
import { query, getDocs, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {

  const [loading, setLoading] = useState(true);

  const [list, setList] = useState([]);

  const { category } = useParams();

  const getProducts = (query) => {
    getDocs(query)
      .then(({ docs }) => {
        const prods = docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          const product = {
            fid: id,
            ...data,
          };
          return product;
        });
        setList(prods);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const productsCollection = col;

    if (!category) {
      getProducts(productsCollection);
    } else {
      const qryFbase = query(
        productsCollection,
        where("category", "==", category)
      );
      getProducts(qryFbase);
    }
  }, [category]);

  if (loading) {
    return <h2 className="mt">CARGANDO...</h2>;
  } else {
    return (
      <div className="itemListContainer">
        <p>{greeting}</p>
        <ItemList list={list} />
      </div>
    );
  }
};

export default ItemListContainer;
