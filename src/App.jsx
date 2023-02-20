import NavBar from "./components/NavBar"
import CartWidget from "./components/CartWidget"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemDetail from "./components/ItemDetail"



function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <CartWidget/>
      <ItemListContainer greeting="Mi primer app"/>
      <ItemDetailContainer/>
      <ItemDetail/>
    </BrowserRouter>
    </>
  )
}

export default App


