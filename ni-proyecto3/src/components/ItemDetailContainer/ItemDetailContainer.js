import ItemDetail from "./ItemDetail";
import { useEffect , useState } from 'react';
import { useParams } from 'react-router';



const detail = [
        {id:'00' ,name:'Remera', marca:'Puma',color:'Negra',talle:'XS',precio:'2400' ,img:'../img/remeraPuma.jpg',stock:'15' },
        {id:'01',name:'Remera', marca:'Nike' ,color:'Roja',talle:'M',precio:'2500' ,img:'../img/remeraNikeroja.jpg' ,stock:'10'},
        {id:'02', name:'Remera', marca:'Adidas' ,color:'Verde',talle:'L',precio:'1500' ,img:'../img/remeraAdidasverde.jpg',stock:'20' },
        {id:'03',name:'Remera', marca:'Reebok' ,color:'Negra',talle:'X',precio:'2000' ,img:'../img/remeraReebokNegra.jpg' ,stock:'8'},
        {id:'04',name:'Buzo', marca:'Puma' ,color:'Negro',talle:'M',precio:'15000' ,img:'../img/BuzoPumanegro.jpg',stock:'2' },
        {id:'05',name:'Buzo', marca:'Nike' ,color:'Negro',talle:'L',precio:'24500' ,img:'../img/buzoNikeNegro.jpg' ,stock:'4'},
        {id:'06',name:'Buzo', marca:'Adidas' ,color:'Rojo',talle:'S',precio:'23000',img:'../img/BuzoAdidasRojo.jpg' ,stock:'3'},
        {id:'07', name:'Buzo', marca:'Reebok' ,color:'Negro',talle:'XL',precio:'21500' ,img:'../img/buzoReebokNEGRO.jpg',stock:'0' },
      
      
  ]
  

function getList () {
    return new Promise ((resolve,reject) =>{
      setTimeout(() => resolve (detail),1500)
      
    })}

const ItemDetailContainer = () => {
    const [productoDetail , setProducto] = useState ([])
    const {id} = useParams()
useEffect(() =>{
  const list = getList()

  list.then(list => {
    const product = list.find(prod => prod.id === id)
    setProducto(product)
   }, err =>{
     console.log(err);
   })
},[id])
 if (productoDetail.length === 0){
   return (
    <div className="spinner-grow text-secondary" role="status">
    <span className="sr-only">Loading..</span>
  </div>
     
   )
 }
    return (
    <div className="card-columns col-sm 4 row mx-8 justify-content-center">
        
         <ItemDetail  item = {productoDetail} />
    
        
    </div>
    
    )
    
    
    
    }


    export default ItemDetailContainer;