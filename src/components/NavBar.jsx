
import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div id='contenedor'>
      <Menu isLazy>
        <Link to={"/"} id='tit'>Mi APP Nombre Undefined</Link>
        <MenuButton className='button'>Categorias</MenuButton>
        <MenuList className="menu">
          {/* MenuItems are not rendered unless Menu is open */}
          <Link to={`/categorias/${"Excursion"}`}>
            <MenuItem>Excursion</MenuItem>
          </Link>
          <Link to={`/categorias/${"Entrada"}`}>
            <MenuItem>Entrada</MenuItem>
          </Link>
          <Link to={`/categorias/${"Espectaculos"}`}>
            <MenuItem>Espectaculos</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </div>
  )
}

export default NavBar