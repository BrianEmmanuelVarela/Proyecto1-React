import ItemList from "./ItemList"
import { useEffect , useState } from 'react';
import { useLocation } from "react-router";

const productos = [
    {id:'00' ,name:'Remera', marca:'Puma',img:"./img/remeraPuma.jpg" },
    {id:'01',name:'Remera', marca:'Nike' , img:"./img/remeraNikeroja.jpg"},
    {id:'02', name:'Remera', marca:'Adidas' , img:"./img/remeraAdidasverde.jpg"},
    {id:'03',name:'Remera', marca:'Reebok' ,img:"./img/remeraReebokNegra.jpg"},
    {id:'04',name:'Buzo', marca:'Puma' , img:"./img/BuzoPumanegro.jpg" },
    {id:'05',name:'Buzo', marca:'Nike' ,img:"./img/buzoNikeNegro.jpg"},
    {id:'06',name:'Buzo', marca:'Adidas' , img:"./img/BuzoAdidasRojo.jpg"},
    {id:'07', name:'Buzo', marca:'Reebok' ,img:"./img/buzoReebokNEGRO.jpg"},
  ]


function getList () {
    return new Promise ((resolve,reject) =>{
      setTimeout(() => resolve(productos), 1000)
    })}
   
const ItemListContainer = () => {
    const [listropa, setListRopa] = useState ([])

    const location = useLocation()

    console.log(location.pathname)
      useEffect(() =>{
      const list = getList()
    
      list.then(resultadoPromise => setListRopa (resultadoPromise))
    
    },[])
  if (listropa.length ===0){
    return <h2 class="font">Buscando productos...</h2>
  }
  

return (
    <div>
    <ItemList products = {listropa}/>
 

       
    </div>
)











}
export default ItemListContainer