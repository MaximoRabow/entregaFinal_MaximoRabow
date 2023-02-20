import NavBar from "./components/NavBar"
import CartWidget from "./components/CartWidget"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemDetail from "./components/ItemDetail"



function App() {
  return (
    <>
      <NavBar/>
      <CartWidget/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      <ItemDetail/>
    </>
  )
}

export default App


