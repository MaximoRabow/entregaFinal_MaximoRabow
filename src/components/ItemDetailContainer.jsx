import React from 'react';
import Datos from "../data.json"
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from './ItemDetail';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { id } = useParams ();
  const [data, setData] = useState([]);

  useEffect (() => {
    const db = getFirestore ();
    const prodCollection = collection (db, "productos");
    getDocs (prodCollection).then ((snapshot) => {
      const nyc = snapshot.docs.map ((doc) => ({
        ...doc.data (),
        id: doc.id,
      }));
      setData (nyc);
    });


  }, [])
    
  return <ItemDetail nyc={data} />; 
}

export default ItemDetailContainer