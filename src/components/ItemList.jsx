import React from 'react'
import { Container } from '@chakra-ui/react'
import Item from './Item'



const ItemList = ({ nyc }) => {
  return (
    <>
        <Container maxW='container.sm' className='main-cat'>
            {nyc?.map((prod)=> (
                <Item
                    id={prod.id}
                    categoria={prod.categoria}
                    tittle={prod.tittle}
                    detalle={prod.detalle}
                    imagen={prod.imagen}
                    cantidad={prod.cantidad}
                    precio={prod.precio}
                    valoracion={prod.valoracion}
                />
            ))}
        </Container>
    </>
  )
}

export default React.memo (ItemList)