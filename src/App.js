import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
        <BrowserRouter>
        <div className="App">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<div className='cardContainer'><ItemListContainer/></div>}/>
          <Route path="/contacto" element={<div><h1>Contactanos</h1></div>}/>
          <Route path="/detalle/:itemid" element={<ItemDetailContainer/>}/>
          <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
          <Route path="*" element={<h2>Pagina NO encontrada</h2>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
