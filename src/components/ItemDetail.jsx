import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCounter from './ItemCounter'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'

const ItemDetail = ({nyc}) => {
  const {id} = useParams ();

  const filtrar = nyc.filter ((prod)=> prod.id === id);

  return (
    <div>
        {filtrar.map((prod)=>(
          <div key={prod.id}>
            <Card maxW='sm'>
              <CardBody>
                <Image
                  src={prod.imagen}
                  alt='imagen'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Living room Sofa</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                  </Text>
                  <Text color='blue.600' fontSize='2xl'>
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Buy now
                  </Button>
                  <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

          </div>
        ))}




    </div>
  )
}

export default ItemDetail