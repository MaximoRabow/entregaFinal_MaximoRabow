import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'

const Item = ({tittle, imagen, detalle, precio, categoria, cantidad, valoracion }) => {
  return (
    <div>
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        id='card'>
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '340px' }}
            maxH={{ base: '100%', sm: '340px' }}
            src= {imagen}
            alt='img'
        />

        <Stack>
            <CardBody>
            <Heading size='md'>
                {tittle}
            </Heading>

            <Text py='2' id='texto'>
                {detalle}
            </Text>
            <Text py='2' id='categ'>
             <b>Categoria:</b> {categoria}
            </Text>
            <Text py='2' id='valo'>
             <b>Valoracion:</b> {valoracion}
            </Text>
            <Text py='2'>
             <b>Cantidad:</b> {cantidad}
            </Text>
            <Text py='2'>
            <b>Precio:</b><span> $</span> {precio}
            </Text>
            </CardBody>

            <CardFooter>
            <Button to={`/`} variant='solid' colorScheme='blue' id='btncard'>
                Detalle
            </Button>
            </CardFooter>
        </Stack>
        </Card>

    </div>
  )
}

export default Item