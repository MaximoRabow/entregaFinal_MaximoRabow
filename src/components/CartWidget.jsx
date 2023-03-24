import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {
  const [cart, setCart] = useContext (CartContext);

  const cantidades = cart.reduce ((acc, curr) => {
    return acc + curr.cantidades
  }, 0);

  return (
    <div id='contenedor2'>
      <Link to={`/${"cart"}`}>
        <span id='cart' class="material-symbols-outlined">
          shopping_cart
        </span>
      </Link>
        <p id='num'>{cantidades}</p>
       
    </div>
  )
}

export default CartWidget