import { useState } from "react"
import '../ItemListContainer/ItemListContainer.css'
const BotonControlador = () =>{

const [count, setCount] = useState(0)

    return(
        <div class="ItemList">
        <h1 style={{color: 'black'}}>{count}</h1>
        <div class="d-flex justify-content-md-around">
        <button type="button" class="btn btn-light btn-lg" onClick={() => setCount(count - 1)}>-</button>
        <button type="button"class="btn btn-light btn-lg " onClick={() => setCount(count + 1)}>+</button>
    </div>
    <br/>
    <button type="button" class="btn btn-outline-secondary btn-lg ">Agregar al carrito</button>
</div>
    );
    }

export default BotonControlador;