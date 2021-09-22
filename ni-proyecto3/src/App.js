// import logo from './logo.svg';
import './App.css';
import { useEffect , useState } from 'react';
import Productoslista from './components/ItemListContainer/ItemList';
import Productosdetail from './components/ItemListContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';

const productos = [
  {id:'00' ,name:'Remera', marca:'Puma' ,talle:'S' ,color:'Negra', precio:'$2000',img:"./img/remeraPuma.jpg" },
  {id:'01',name:'Remera', marca:'Nike' ,talle:'XL' ,color:'Roja', precio:'$2500', img:"./img/remeraNikeroja.jpg"},
  {id:'02', name:'Remera', marca:'Adidas' ,talle:'X' ,color:'Verde', precio:'$2500', img:"./img/remeraAdidasverde.jpg"},
  {id:'03',name:'Remera', marca:'Reebok' ,talle:'M' ,color:'Negra', precio:'$2020', img:"./img/remeraReebokNegra.jpg"},
  {id:'04',name:'Buzo', marca:'Puma' ,talle:'M' ,color:'Negra', precio:'$12000', img:"./img/BuzoPumanegro.jpg" },
  {id:'05',name:'Buzo', marca:'Nike' ,talle:'XS' ,color:'Negra', precio:'$20000',img:"./img/buzoNikeNegro.jpg"},
  {id:'06',name:'Buzo', marca:'Adidas' ,talle:'S' ,color:'Rojo', precio:'$20005', img:"./img/BuzoAdidasRojo.jpg"},
  {id:'07', name:'Buzo', marca:'Reebok' ,talle:'M' ,color:'Negra', precio:'$2000',img:"./img/buzoReebokNEGRO.jpg"},
]
function getList () {
  return new Promise ((resolve,reject) =>{
    setTimeout(() => resolve(productos), 2000)
  })}
  function getListDetail () {
    return new Promise ((resolve,reject) =>{
      setTimeout(() => resolve (productos),2000)
      
    }
    )
  }



const App = () => {
 const [listRopa , setListRopa] = useState ([])
    
      useEffect(() =>{
      const list = getList()
    
      list.then(resultadoPromise => setListRopa (resultadoPromise))
    
    },[])
const [listDetail , setListDetail] = useState ([])
useEffect(() =>{
  const listD = getListDetail ()
  listD.then(resultadoPromise => setListDetail (resultadoPromise))
},[])
 
 return (
    <div className="App">
      <header>
      
     
      <NavBar/>
     
     </header>
     <ItemListContainer>
    
      <Productoslista ropa = {listRopa} />
      <Productosdetail detail = {listDetail}/>
       </ItemListContainer>
  </div>
);
}



    

export default App;
