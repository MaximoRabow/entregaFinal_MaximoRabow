import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from './ItemList';
import {collection, getDocs, getFirestore} from "firebase/firestore";
import { useParams } from 'react-router-dom';

  const ItemListContainer = () => {
    const [nyc, setNyc] = useState([]);
    const { categorias } = useParams ();

    useEffect(()=> {
      const db = getFirestore ();
      const prodCollection = collection (db, "productos");
      getDocs (prodCollection).then ((snapshot) => {
        const nyc = snapshot.docs.map ((doc) => ({
          ...doc.data (),
          id: doc.id
        }));
        setNyc (nyc);
      })}, []);

    const filtrar = nyc.filter ((prod)=> prod.categoria === categorias);

  return (
    <div id='main'>
      {categorias ? <ItemList nyc={filtrar}/> : <ItemList nyc= {nyc}/>};
    </div>
  
  )
}



export default ItemListContainer