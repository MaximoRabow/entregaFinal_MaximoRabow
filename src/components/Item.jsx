import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'

const Item = ({tittle, id, imagen, detalle, precio, categorias, cantidad, valoracion }) => {
  return (
    <div>
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            maxH={{ base: '100%', sm: '200px' }}
            src= {imagen}
            alt='img'
        />

        <Stack>
            <CardBody>
            <Heading size='md'>
                {tittle}
            </Heading>

            <Text py='2'>
                {detalle}
            </Text>
            <Text py='2'>
             <b>Categorias:</b> {categorias}
            </Text>
            <Text py='2'>
             <b>Cantidad:</b> {cantidad}
            </Text>
            <Text py='2'>
             <b>Valoracion:</b> {valoracion}
            </Text>
            <Text py='2'>
            <b>Precio:</b><span> $</span> {precio}
            </Text>
            </CardBody>

            <CardFooter>
            <Button variant='solid' colorScheme='blue'>
                Detalle
            </Button>
            </CardFooter>
        </Stack>
        </Card>

    </div>
  )
}

export default Item