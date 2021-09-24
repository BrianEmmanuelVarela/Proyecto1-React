
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/NavBar/Home';
// import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';



const App = () => {
 
 return (
    <div className="App">
      <header>
    <BrowserRouter>
    <NavBar/>
    <Switch>



<Route path="/" exact>
  <Home/>
</Route>

<Route path="/hombres" exact>
<ItemListContainer/>
</Route>
      
    </Switch>
    </BrowserRouter>
     </header>
     
       
  </div>
);
}



    

export default App;
