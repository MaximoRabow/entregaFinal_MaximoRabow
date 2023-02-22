import NavBar from "./components/NavBar"
import CartWidget from "./components/CartWidget"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "./components/Welcome"



function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <CartWidget/>
        <Routes>
          <Route exact path="/" element= {<Welcome/>} />
          <Route exact path="/categorias/:categoria" element={<ItemListContainer/>}/>
          <Route exact path="/item/:id" element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;


