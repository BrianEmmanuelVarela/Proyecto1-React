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
        <div class="ItemList">
        <h1 style={{color: 'black'}}>{count}</h1>
        <div class="d-flex justify-content-md-around">
        <button type="button" class="btn btn-dark btn-lg" onClick={funcionRestar}>-</button>
        <button type="button"class="btn btn-dark btn-lg " onClick={funcionMax}>+</button>
       
    </div>
    <br/>
    <button type="button" class="btn btn-outline-secondary btn-lg ">Agregar al carrito</button>
</div>
    );
    }

export default BotonControlador;