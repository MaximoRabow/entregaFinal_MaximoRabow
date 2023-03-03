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
          <Box>{id}</Box>
        </div>
      ))}
        <Box>Max</Box>

    </>
  )
}

export default ItemDetail