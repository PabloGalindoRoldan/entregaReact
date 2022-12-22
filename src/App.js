import './App.css';
import Card from  "./components/Card/Card"
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <div className="App">
        <NavBar/>
        <header className="App-header">
        <ItemListContainer greeting="Bienvenidos"/>
        </header>
      </div>
      <div>
        <Card img="/imgs/img6.jpg" title="Shampoo" price={2500} detail="Nutri Boost Shampoo 500ml"/>
        <Card img="/imgs/img7.jpg" title="Acondicionador" price={2500} detail="Nutri Boost Acondicionador 500ml"/>
        <Card img="/imgs/img13.jpg" title="Exfoliante" price={3000} detail="Crema Exfoliante Palta 500ml"/>
      </div>
    </>
  );
}

export default App;
