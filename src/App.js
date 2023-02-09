import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { CartProvider } from './storage/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import PageNotFound from './pages/PageNotFound';


function App() {

  return (
    <>
        <BrowserRouter>
          <CartProvider>
            <div className="App">
              <NavBar />
            </div>
            
            <Routes>
              <Route path="/" element={
                <>
                  <div className ="landing">
                  <h1>Vegania</h1>
                  <p> Productos naturales para el cuidado de la piel.</p>
                  </div>
                  <div className='cardContainer'><ItemListContainer/></div>
                </>
                }/>
              <Route path="/detalle/:itemid" element={<div className='cardContainer'><ItemDetailContainer/></div>}/>
              <Route path="/category/:categoryid" element={<div className='cardContainer'><ItemListContainer/></div>}/>
              <Route path="/cart" element={<CartContainer/>}/>
              <Route path="/gracias/:orderid" element= {<h1>Gracias por tu compra</h1>}></Route>
              <Route path="*" element={<PageNotFound/>}></Route>
            </Routes>
          </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
