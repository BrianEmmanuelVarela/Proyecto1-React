import { useState } from "react"

import '../ItemListContainer/ItemListContainer.css'
const BotonControlador = () =>{

const [count, setCount] = useState(1)
const funcionRestar =() => {
    if (count <=0) {
        alert ("Valor no permitido")
    } else setCount (count - 1)
}
const funcionMax = () =>{
    if (count ===25){
        alert ("Limite de stock")
    } else setCount (count + 1)
}
    return(
        <div class="">
        <h1 style={{color: 'black'}}>{count}</h1>
        
        <button type="button" class="btn btn-dark btn-sm button1" onClick={funcionRestar}>-</button>
        <button type="button"class="btn btn-dark btn-sm button1 " onClick={funcionMax}>+</button>
        <div>
        <a href="" class="btn btn-dark btn-lg  button1">Agregar al carrito</a>
       </div>
    </div>
    
   

    );
    }

export default BotonControlador;