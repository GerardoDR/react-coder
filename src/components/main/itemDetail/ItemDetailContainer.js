import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { col } from "../../../firebase.js";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(true);

  const getItem = () => {
    const productsCollection = col
    const refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setSelected(res.data());
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => getItem(), [id]);

  if (loading) {
    return <h2 className="mt">CARGANDO...</h2>;
  } else {
    return <ItemDetail prod={selected} />;
  }
};

export default ItemDetailContainer;
