import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div id='contenedor2'>
      <Link to={`/${"cart"}`}>
        <span id='cart' class="material-symbols-outlined">
          shopping_cart
        </span>
      </Link>
        <p id='num'>0</p>
       
    </div>
  )
}

export default CartWidget