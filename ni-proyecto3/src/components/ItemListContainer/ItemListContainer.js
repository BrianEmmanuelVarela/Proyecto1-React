import ItemList from "./ItemList"
import { useEffect , useState } from 'react';
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
      setTimeout(() => resolve(productos), 2000)
    })}
   
const ItemListContainer = () => {
    const [listropa, setListRopa] = useState ([])
    
      useEffect(() =>{
      const list = getList()
    
      list.then(resultadoPromise => setListRopa (resultadoPromise))
    
    },[])

return (
    <div>
    <ItemList products = {listropa}/>
 

       
    </div>
)











}
export default ItemListContainer