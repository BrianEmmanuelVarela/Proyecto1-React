
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.js';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';



const App = () => {
 
 return (
    <div className="App">
      <header>
      
     
      <NavBar/>
     
     </header>
     <ItemListContainer />
    <ItemDetailContainer/>
      
    
       
  </div>
);
}



    

export default App;
