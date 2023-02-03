import NavBar from "./components/NavBar"
import CartWidget from "./components/CartWidget"
import ItemListContainer from "./components/ItemListContainer"


function App() {
  return (
    <>
      <NavBar/>
      <CartWidget/>
      <ItemListContainer greeting="Mi primer app"/>
    </>
  )
}

export default App


