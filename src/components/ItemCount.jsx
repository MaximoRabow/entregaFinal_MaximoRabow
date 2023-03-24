import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { ButtonGroup, IconButton, Tooltip, Center, Button } from "@chakra-ui/react";

const ItemCount = ({cantidad, id, precio, tittle}) => {
  const [cart, setCart] = useContext (CartContext);
  const [valor, setValor] = useState (0);

  const sum = () => {
    setValor (valor + 1);
  }

  const res = () => {
    setValor (valor - 1);
  }

  const addToCart = () => {
    setCart ((agregar) => {
      const prodExist = agregar.find ((prod) => prod.id === id);
      if (prodExist) {
        return agregar.map ((prod) => {
          if (prod.id === id) {
            return {...prod, cantidad: prod.cantidad + valor };
          } else {
            return prod;
          }
        });
      } else {
        return [...agregar, {id, cantidad: valor, precio, tittle}];
      }
    })
  }

  return (
    <>
      <ButtonGroup size="md" >
        {valor < 0 ? ( <Tooltip label="minimum stock reached" placement="bottom"><IconButton icon={<MinusIcon />} isDisabled /></Tooltip>) : (
        <IconButton icon={<MinusIcon />} onClick={res} />)}
        <Center>
          <Button onClick={() => addToCart()} variant="solid" colorScheme="red">AGREGAR AL CARRITO: {valor}</Button>
        </Center>
        {valor < cantidad ? (
          <IconButton icon={<AddIcon />} onClick={sum} />
        ) : (
          <Tooltip label="stock limit reached" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
      </ButtonGroup>
    </>
  )
}

export default ItemCount;