import { Box, useState } from '@chakra-ui/react';
import React from 'react'


const ItemCounter = () => {
  const [valor, setValor] = useState (0);

  const sum = () => {
    setValor (valor + 1);
  }

  const res = () => {
    setValor (valor - 1);
  }

  const reset = () => {
    setValor (0);
  }

  return (
    <div className='counter'>
      <Box>{valor}</Box>
      <Button onClick={sum} >+</Button>
      <Button onClick={res} >-</Button>
      <Button onClick={reset} >Reset</Button>
        
    </div>
  )
}

export default ItemCounter