// import logo from './logo.svg';

import { useEffect , useState } from 'react';
import './App.css';
import BotonControlador from './components/ItemListContainer/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';
const productos = [
  {id:'00' ,img :'./remeraPuma.jpg', name:'Remera', marca:'Puma' ,talle:'S' ,color:'Negra', precio:'$2000' },
  {id:'01', name:'Remera', marca:'Nike' ,talle:'XL' ,color:'Roja', precio:'$2500' },
  {id:'02', name:'Remera', marca:'Adidas' ,talle:'X' ,color:'Verde', precio:'$2500'},
  {id:'03', name:'Remera', marca:'Reebok' ,talle:'M' ,color:'Negra', precio:'$2020'},
  {id:'04', name:'Buzo', marca:'Puma' ,talle:'M' ,color:'Negra', precio:'$12000' },
  {id:'05', name:'Buzo', marca:'Nike' ,talle:'XS' ,color:'Negra', precio:'$20000' },
  {id:'06', name:'Buzo', marca:'Adidas' ,talle:'S' ,color:'Rojo', precio:'$20005'},
  {id:'07', name:'Buzo', marca:'Reebok' ,talle:'M' ,color:'Negra', precio:'$2000'},
]
  function getList () {
    return new Promise ((resolve,reject) =>{
      setTimeout(()=> resolve (productos),2000)
    }
    
    )
  } 
   



const App = () => {

const [listRopa , setListRopa] = useState ([])

  useEffect(() =>{
  const list = getList()


list.then(list => {
setListRopa(list)
})


},[])
  return (
    <div className="App">
      <header>
      
     
        <NavBar/>
       
       </header>
       <ItemListContainer>
         <div class="card">
           <div class="card-body">
       {listRopa.map(ropa => <li key={ropa.id}> {ropa.img}{ropa.name}   {ropa.marca}   {ropa.talle}   {ropa.color}   {ropa.precio}</li>)}
</div>
</div>
         <BotonControlador inicial={1}max={20}/>
         </ItemListContainer>
    </div>
  );
}

export default App;
{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}