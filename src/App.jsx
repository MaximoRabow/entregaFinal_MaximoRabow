import NavBar from "./components/NavBar"
import CartWidget from "./components/CartWidget"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "./components/Welcome"
import Footer from "./components/Footer"
import Cart from "./components/CartWidget"
import ItemDetailContainer from "./components/ItemDetailContainer"



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
          <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;


