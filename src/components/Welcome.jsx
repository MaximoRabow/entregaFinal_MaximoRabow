import { Box, Center, Image } from '@chakra-ui/react'
import React from 'react'

const Welcome = () => {
  return (
    <div>
        <Box>
            <Image src="https://4kwallpapers.com/images/wallpapers/new-york-city-skyline-skyscrapers-cityscape-sunset-evening-2880x1800-35.jpg" alt="nyc"/>
        </Box>
        <Box className='text-welcome'>Ney York city</Box>
    </div>
  
  )
}

export default Welcome