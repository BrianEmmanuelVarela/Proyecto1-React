import ItemList from "./ItemList"
import { useEffect , useState } from 'react';
import { useParams } from 'react-router';


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
      setTimeout(() => resolve(productos), 1500)
    })}
   
const ItemListContainer = () => {
    const [listRopa, setListRopa] = useState ([])
    const {name} = useParams()

    
      useEffect(() =>{
      const list = getList()
    list.then(list =>{
      if(!name){
        setListRopa(list)
      } else{
        const prodCategory = list.filter(prod => prod.name.toLowerCase() === name) 
        setListRopa (prodCategory)
      }
    }, err => {
      console.log(err);
    })
    return (()=>{
      setListRopa ([])
    })

  },[name])
if (listRopa.length === 0){
  return (
    <div className="spinner-grow text-secondary" role="status">
  <span className="sr-only">Loading...</span>
</div>
  )
}

    
      


return (
<section className="container-fluid">
            <div>
                <h1 className="title font">Hombres</h1>
                
            </div>
            


    <div>
    <ItemList products = {listRopa}/>
 

       
    </div>
    </section>
)











}
export default ItemListContainer