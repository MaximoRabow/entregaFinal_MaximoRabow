import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);

const deleteItemCart = (prod) => {
  const inCart = cartItems.find (
    (prodInCart) => prodInCart.id === prod.id
  );
  if (inCart.cantidad === 1) {
    setCartItems (cartItems.filter ((prodInCart) => prodInCart.id !== prod.id));
  } else {
    setCartItems ((prodInCart) => {
      if (prodInCart.id === prod.id) {
        return {
          ...inCart, cantidad: inCart.cantidad - 1
        };
      } else return prodInCart;
    }) 
  }

}


  return (
    <CartContext.Provider value={[cart, setCart]}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext