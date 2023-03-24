import { useState, useContext } from "react"
import { CartContext } from '../Context/CartContext';
import {
  Button,
  Container,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  chakra, Box
} from "@chakra-ui/react";


const Cart = () => {
  const [cart, setCart] = useContext (CartContext);

  const precioTotal = () => {
    prod.cantidad * prod.precio
  }
  
  
  return (
    <>
      <Center h="100px" color="black">
        <Heading as="h2" size="2xl">
          Finaliza tu compra aqui!
        </Heading>
      </Center>
      <div className="cartcontainer">
        <Heading className="detallecont">PRODUCTO</Heading>
        <Heading className="detallecont">CANTIDAD</Heading>
        <Heading className="detallecont">PRECIO UNITARIO</Heading>
        <Heading className="detallecont">PRECIO TOTAL</Heading>
      </div>
      
      {cart.map((prod) => {
        return (  
          <div key={prod.id}>
            <div className="cartcontainer">
              <Text>{prod.tittle}</Text>
              <Text>{prod.cantidades}</Text>
              <Text>{prod.precio}</Text>

                
            </div>
          </div>
         
        );
      })}
      
    </>
  )
}

export default Cart