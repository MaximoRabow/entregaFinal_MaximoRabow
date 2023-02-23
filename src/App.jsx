import NavBar from "./components/NavBar"
import CartWidget from "./components/CartWidget"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "./components/Welcome"
import Cart from "./components/Cart"



function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <CartWidget/>
        <Routes>
          <Route exact path="/" element= {<Welcome/>} />
          <Route exact path="/categorias/:categorias" element={<ItemListContainer/>}/>
          <Route exact path="/categorias" element={<ItemListContainer/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;


