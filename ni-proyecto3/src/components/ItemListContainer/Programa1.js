import { useState, useEffect } from "react"
import Productoslista from "./ItemList"

function getList () {
    return new Promise ((resolve,reject) =>{
    const productos = [
    {id:'00' ,img:"./img/remeraPuma.jpg" },
    {id:'01', img:"./img/remeraNikeroja.jpg"},
    {id:'02', img:"./img/remeraAdidasverde.jpg"},
    {id:'03', img:"./img/remeraReebokNegra.jpg"},
    {id:'04', img:"./img/BuzoPumanegro.jpg" },
    {id:'05',img:"./img/buzoNikeNegro.jpg"},
    {id:'06', img:"./img/BuzoAdidasRojo.jpg"},
    {id:'07',img:"./img/buzoReebokNEGRO.jpg"},
  ]
    
      setTimeout(()=> resolve (productos),2000)
    }
    
    )
  } 
   

const Programs = () => {

const [listRopa , setListRopa] = useState ([])

  useEffect(() =>{
  const list = getList()

  list.then(resultadoPromise => setListRopa (resultadoPromise))

},[])
return(
    <div>
        <Productoslista ropa={listRopa}/>
    </div>
)
}
export default Programs