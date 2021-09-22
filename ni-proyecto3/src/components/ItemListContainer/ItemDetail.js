import React from "react";
import BotonControlador from "./ItemCount";


const Detail = ({color , talle ,precio}) => {


    return (
        <div class="font">
<div class="card card border-bottom card1 " >

<div class="card-body  ">
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
export default Detail

