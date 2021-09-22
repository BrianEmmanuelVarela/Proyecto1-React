import Detail from "./ItemDetail";
import { useEffect , useState } from 'react';



const detail = [
         {id:'00' ,name:'Remera', marca:'Puma',color:'Negra',talle:'XS',precio:'2500',img:"./img/remeraPuma.jpg" },
        {id:'01',name:'Remera', marca:'Nike' ,color:'Negra',talle:'XS',precio:'2500' ,img:"./img/remeraNikeroja.jpg"},
        {id:'02', name:'Remera', marca:'Adidas' ,color:'Negra',talle:'XS',precio:'2500' ,img:"./img/remeraAdidasverde.jpg"},
        {id:'03',name:'Remera', marca:'Reebok' ,color:'Negra',talle:'XS',precio:'2500' ,img:"./img/remeraReebokNegra.jpg"},
        {id:'04',name:'Buzo', marca:'Puma' ,color:'Negra',talle:'XS',precio:'2500' ,img:"./img/BuzoPumanegro.jpg" },
        {id:'05',name:'Buzo', marca:'Nike' ,color:'Negra',talle:'XS',precio:'2500' ,img:"./img/buzoNikeNegro.jpg"},
        {id:'06',name:'Buzo', marca:'Adidas' ,color:'Negra',talle:'XS',precio:'2500' ,img:"./img/BuzoAdidasRojo.jpg"},
        {id:'07', name:'Buzo', marca:'Reebok' ,color:'Negra',talle:'XS',precio:'2500'  ,img:"./img/buzoReebokNEGRO.jpg"},
      
      
  ]
  

function getList () {
    return new Promise ((resolve,reject) =>{
      setTimeout(() => resolve (detail),2000)
      
    })}

const ItemDetailContainer = () => {
    const [producto , setProducto] = useState ([])
useEffect(() =>{
  const listD = getList()
  listD.then(pro => {
   const produc = pro.find(prod => prod.id === "00") 
      setProducto (produc)
   })
},[])
 
    return (
    <div class="card-columns col-sm 4 row mx-8 justify-content-center">
        
         <Detail  produc = {producto} />
    
        
    </div>
    
    )
    
    
    
    }


    export default ItemDetailContainer;