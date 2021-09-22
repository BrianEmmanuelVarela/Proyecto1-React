import React from "react";
import BotonControlador from "./ItemCount";


const Detail = ({produc}) => {


    return (
        <div class="font">
<div class="card card border-bottom card1 " >
    
<img src={ produc?.img} alt ="imagen" class="card-img-top rounded shadow p-3 mb-5 bg-white rounded "/>
<h5><strong>{produc?.name} {produc?.marca}</strong></h5>
<div class="card-body  ">
<h6>{produc?.color} </h6>
<h6> Talle: <strong> {produc.talle} </strong></h6>
<span class="badge badge-light"><h6><strong><p class="card-text">${produc?.precio}</p></strong></h6>  </span>
    
                 
   <div> 
     <BotonControlador/> 
           </div>          
 </div>    
</div>

 
 </div>




    )
    }
export default Detail

