import React from "react";
import BotonControlador from "./ItemCount";


const Ropa = ({name, marca , talle, color, precio , img,}) => {

    return (
        <div class="">
<div class="card card border-bottom card1 " >
<img src={img}class="card-img-top rounded shadow p-3 mb-5 bg-white rounded "/>
<div class="card-body  ">
<h5 class="card-title "><strong>{name}  {marca}</strong></h5>
<h6>{color}</h6>
<h6> Talle {talle}</h6>
<span class="badge badge-light"><p class="card-text">{precio}</p>  </span>
    
                 
   <div> 
     <BotonControlador/> 
           </div>          
 </div>    

</div>

 
 </div>




    )
    }

export default Ropa



