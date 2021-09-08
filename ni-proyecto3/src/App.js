// import logo from './logo.svg';


import './App.css';
import BotonControlador from './components/ItemListContainer/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';




const App = () => {
  return (
    <div className="App">
      <header>
      
     
        <NavBar/>
       
       </header>
       <ItemListContainer>
         <BotonControlador/>
         </ItemListContainer>
    </div>
  );
}

export default App;
