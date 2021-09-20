import React from "react";
import BotonControlador from "./ItemCount";

const ItemDetails = ({ name, marca, talle, color, precio ,}) => {

return (
<div class="card-body  ">
<h5 class="card-title "><strong>{name}  {marca}</strong></h5>
<h6>{color}</h6>
<h6> Talle {talle}</h6>
<span class="badge badge-light"><p class="card-text">{precio}</p>  </span>
    
                 
   <div> 
     <BotonControlador/> 
           </div>          
 </div>    


)
}
export default ItemDetails