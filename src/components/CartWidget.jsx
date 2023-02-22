import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div id='contenedor2'>
      <Link>
        <span id='cart' class="material-symbols-outlined">
          shopping_cart
        </span>
        <p id='num'>0</p>
      </Link> 
    </div>
  )
}

export default CartWidget