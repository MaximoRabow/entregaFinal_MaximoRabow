import { useState } from "react"
import { collection, getFirestore, addDoc} from "firebase/firestore";
import {
    Container,
    Heading,
    Stack,
    Input,
    Button,
    Text,
    Center,
    FormControl,
    FormLabel,
  } from "@chakra-ui/react";

const SendOrder = () => {
    const [orderId, setOrderId] = useState (null);
    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault ();
        if (name === "" || email === "") {
            alert ("Completar campo");
        } else {
            addDoc (ordersCollection, order).then (({ id }) => setOrderId (id));
        }
        setEmail (" ");
    }

    const db = getFirestore ();
    const ordersCollection = collection (db, 'order');
    const order = { name, email };
 
  return (
    <div>
      <Center>
        <Heading m={6} >Completa los datos para recibir el ID de tu compra</Heading>
      </Center>

      <Container>
        <FormControl>
          <form onSubmit={handleSubmit}>
            <FormLabel>NAME</FormLabel>
            <Input size="md" onChange={(e) => setName(e.target.value)} />
            <FormLabel>EMAIL</FormLabel>
            <Input size="md" onChange={(e) => setEmail(e.target.value)} />
            <Center>
                <Button colorScheme="red" type="submit" m={5}>
                    CONFIRMAR COMPRA
                </Button>
            </Center>
          </form>
        </FormControl>
      </Container>
      <Center>
        <Text as="b" m={3} fontSize="ms">
          Order ID:{" "}
        </Text>
        <Text as="mark" fontSize="2xl">
          {orderId}
        </Text>
      </Center>
    </div>
  )
}

export default SendOrder