import React from 'react';
import Datos from "../data.json"
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams ();
  

  const [nyc, setNyc] = useState([]);

  useEffect (() => {
    const fetchData = async () => {
      try {
          const res = await fetch (Datos);
          const data = await res.json ();
          setNyc (data);
      } catch (error) {
          console.log (error);
      }
    }
    fetchData();

  }, []);

  const filtrar = Datos.filter ((prod)=> prod.id === id);

  return <ItemDetail nyc={Datos} />; 
}

export default ItemDetailContainer