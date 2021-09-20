// import logo from './logo.svg';
import './App.css';
import { useEffect , useState } from 'react';
import Programs from './components/ItemListContainer/Programa1';
import Programs2 from './components/ItemListContainer/Programa2';
import Productoslista from './components/ItemListContainer/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer.js';

import NavBar from './components/NavBar/NavBar.js';

  





const App = () => {
  

  return (
    <div className="App">
      <header>
      
     
      <NavBar/>
     
     </header>
     <ItemListContainer>
     <ItemDetailContainer/>
      <Programs/>
      <Programs2/>
       </ItemListContainer>
  </div>
);
}


 
    

export default App;
