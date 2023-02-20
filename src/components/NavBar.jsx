
import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div id='contenedor'>
      <Menu isLazy>
        <p id='tit'>Mi APP Nombre Undefined</p>
        <MenuButton className='button'>CATALOGO</MenuButton>
        <MenuList className="menu">
          {/* MenuItems are not rendered unless Menu is open */}
          <MenuItem>Opcion 1</MenuItem>
          <MenuItem>Opcion 2</MenuItem>
          <MenuItem>Opcion 3</MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}

export default NavBar