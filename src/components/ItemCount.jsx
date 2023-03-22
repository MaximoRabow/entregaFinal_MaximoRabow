import { Box } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';


const ItemCount = () => {
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

export default ItemCount