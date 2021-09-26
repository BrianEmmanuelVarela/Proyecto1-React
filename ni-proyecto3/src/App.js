
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer';
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

<Route exact path='/mujeres'>
</Route>    
    
        
<Route exact path='/niños'>

</Route>
<Route exact path='/marcas'>

</Route>
<Route exact path="/category/:name"> 
              <ItemListContainer/>
            </Route>
            <Route exact path="/item/:id"> 
              <ItemDetailContainer  />
            </Route>
<Route exact path='/deportes'>

</Route>

    </Switch>
    <Footer/>
    </BrowserRouter>
     </header>
     
       
  </div>
);
}



    

export default App;
