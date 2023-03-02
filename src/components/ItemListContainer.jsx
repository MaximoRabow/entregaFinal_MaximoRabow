import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Datos from '../data.json';
import ItemDetailContainer from './ItemDetailContainer';


  const ItemListContainer = () => {
    const { categorias } = useParams ();
    const [nyc, setNyc] = useState([]);

    useEffect(()=> {
      const fetchData = async () => {
        try {
            const res = await fetch (Datos);
            const data = await res.json ()
            setNyc (data);
        } catch (error) {
            console.log (error);
        }
      }
      fetchData();
    }, []);

    const filtrar = Datos.filter ((prod)=> prod.categoria === categorias);

  return (
    <div id='main'>
      {categorias ? <ItemList nyc={filtrar}/> : <ItemList nyc= {Datos}/>};
    </div>
  
  )
}



export default ItemListContainer