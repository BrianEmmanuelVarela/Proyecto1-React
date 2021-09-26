import React from "react";
import BotonControlador from "../ItemCount/ItemCount";


const ItemDetail = ({producDetail}) => {
 

    return (
        <div class="font">
{/* <div class="card card border-bottom card1 " >

<img src={producDetail?.img} alt ="..." class="card-img-top rounded shadow p-3 mb-5 bg-white rounded "/>

<h5><strong>{producDetail?.name} {producDetail?.marca}</strong></h5>
<div class="card-body  ">
<h6>Color: <strong> {producDetail?.color}</strong> </h6>
<h6> Talle: <strong> {producDetail?.talle} </strong></h6>
<span class="badge badge-light"><h6><strong><p class="card-text">${producDetail?.precio}</p></strong></h6>  </span> */}

    <ul class="list border rounded " >
  <li class="media">
    <img src={producDetail?.img} class="mr-5 imgD" alt="..."/>
    <div class="media-body">
    <li> <h6 class="mt-0 mb-1">Articulo :<strong> {producDetail?.name} </strong> </h6></li>
      <li>Marca: <strong>{producDetail?.marca} </strong> </li>
      <li>Color: <strong> {producDetail?.color}</strong>    </li>
      <li>Talle: <strong> {producDetail?.talle} </strong></li>
      <li><span class="badge badge-light"><h6><strong><p class="card-text">Precio :${producDetail?.precio}</p></strong></h6>  </span></li>
    <BotonControlador/> 
    </div>
  </li>
</ul>           
   <div> 
     
           </div>          
 </div>    
// </div>

 
//  </div>




    )
    }
export default ItemDetail

