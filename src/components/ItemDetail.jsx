import { useParams } from 'react-router-dom'
import {  Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({nyc}) => {
  const {id} = useParams ();

  const [prod, setProd] = useState ([]);

  const filtrar = nyc.filter ((prod)=> prod.id === id);

  

  return (
    <>
      {filtrar.map ((prod) => (
        <div class='detailcont' key={prod.id}>
          <div id='contpromo'>
            <p>Vivi la mejor experiencia en excursiones, eventos y espectaculos aqui!
            </p>
          </div>
          <div id='contimg'>
            <img id='detailImagen' src={prod.imagen} alt="" />
          </div>
          <div id='conttit'>
            <Box className='detailTittle'>{prod.tittle}</Box>
          </div>
          <div id='contdet'>
            <Box className='detailDetalle'>{prod.detalle}</Box>
          </div>
          <div id='contval'>
            <Box className='detailVal'><span><b>Valoracion:</b> </span>{prod.valoracion}</Box>
          </div>
          <div id='contpres'>
            <Box className='detailPre'><span><b>Precio: $</b> </span>{prod.precio}</Box>
          </div>
          <div id='contbtn'>
          <ItemCount 
          cantidad = {prod.cantidad}
          id = {prod.id}
          precio = {prod.precio}
          tittle = {prod.tittle}
          />
          </div>
          <div>
           
            
             
          </div>
        </div>
      ))}
    </>
  )
}

export default ItemDetail