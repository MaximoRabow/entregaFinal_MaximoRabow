import { useContext, useState } from "react"
import { CartContext } from '../Context/CartContext';
import { Center, Heading, Text } from "@chakra-ui/react";
import { CloseButton, Stack } from '@chakra-ui/react'
import SendOrder from "./SendOrder";



const Cart = () => {
  const [cart, setCart] = useContext (CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  
const removeItem = () => {
  setCart (() => {
    
  })
}



  return (
    <>
      <Center h="100px" color="black">
        <Heading as="h3" size="2xl">
          Finaliza tu compra aqui!
        </Heading>
      </Center>
      <div className="cartcontainer">
        <Text className="detallecont">PRODUCTO</Text>
        <Text className="detallecont">PRECIO UNITARIO</Text>
        <Text className="detallecont">CANTIDAD</Text>
        <Text className="detallecont">PRECIO TOTAL</Text>
        <Text className="detallecont">ELIMINAR</Text>
      </div>
      
      {cart.map((prod) => {
        return (  
          <div key={prod.id}>
            <div className="prodcontainer">
              <div>
                <Text className="prodcont">{prod.tittle}</Text>
              </div>
              <div>
                <Text className="prodcont">USD {prod.precio}</Text>
              </div>
              <div>
                <Text className="prodcont">{prod.cantidades}</Text>
              </div>  
              <div>
              <Stack direction='row' spacing={6}>
                <CloseButton size='md' />
              </Stack>
              </div>
            </div>
          </div>
         
        );
      })}
      <SendOrder/>
    </>
  )
}

export default Cart;