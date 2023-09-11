 import NavBar from './components/NavBar';
 import ItemListContainer from './components/ItemListContainer';
import './App.css';


function App() {
  return (
    <div className="App">
       
     <NavBar/>
     <ItemListContainer greeting="Esto es un E-commerce"/>
    </div>
  )
}

export default App;
