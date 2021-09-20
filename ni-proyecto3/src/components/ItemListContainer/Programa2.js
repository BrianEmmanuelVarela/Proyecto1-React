import { useEffect, useState } from "react";
import Ropa from "./Item";
import ItemDetails from "./ItemDetail";

import ItemDetailContainer from "./ItemDetailContainer";
function getList ()  {
return new Promise ((resolve , reject) =>{
    const programs2 = [
        {id:'00' ,name:'Remera', marca:'Puma' ,talle:'S' ,color:'Negra', precio:'$2000'  },
        {id:'01', name:'Remera', marca:'Nike' ,talle:'XL' ,color:'Roja', precio:'$2500'},
        {id:'02', name:'Remera', marca:'Adidas' ,talle:'X' ,color:'Verde', precio:'$2500'},
        {id:'03', name:'Remera', marca:'Reebok' ,talle:'M' ,color:'Negra', precio:'$2020'},
        {id:'04', name:'Buzo', marca:'Puma' ,talle:'M' ,color:'Negra', precio:'$12000' },
        {id:'05', name:'Buzo', marca:'Nike' ,talle:'XS' ,color:'Negra', precio:'$20000'},
        {id:'06', name:'Buzo', marca:'Adidas' ,talle:'S' ,color:'Rojo', precio:'$20005'},
        {id:'07', name:'Buzo', marca:'Reebok' ,talle:'M' ,color:'Negra', precio:'$2000'},
      

    ]
    setTimeout(() => resolve(programs2), 1000)
})}

const Programs2 = () => {

    const [listDetalles , setListRopa] = useState ([])
    
      useEffect(() =>{
      const list = getList()
    
      list.then(resultadoPromise => setListRopa (resultadoPromise))
    
    },[])
    return(
        <div>
            <ItemDetailContainer detalles={listDetalles}/>
        </div>
    )
    }
    export default Programs2