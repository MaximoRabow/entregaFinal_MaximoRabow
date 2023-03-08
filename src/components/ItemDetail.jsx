import React from 'react'
import { useParams } from 'react-router-dom'
import {  Box } from '@chakra-ui/react'

const ItemDetail = ({nyc}) => {
  const {id} = useParams ();

  const filtrar = nyc.filter ((prod)=> prod.id === id);

  return (
    <>
      {filtrar.map ((prod) => (
        <div key={prod.id}>
          <Box>{prod.imagen}</Box>
          <Box>{prod.detalle}</Box>
          <Box>{prod.precio}</Box>
        </div>
      ))}
        <Box>Max</Box>

    </>
  )
}

export default ItemDetail