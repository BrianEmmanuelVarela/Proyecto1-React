import React from "react";
import { NavLink } from 'react-router-dom';


const Item= ({productDetail}) => {

    return (
       <div class="font">
<div class="card card border-bottom card1 " >
<img src={productDetail?.img} alt ="producto" class="card-img-top rounded shadow p-3 mb-5 bg-white rounded "/>
<div class="card-body  ">
<h5 class="card-title "><strong>{productDetail?.name}  {productDetail?.marca}</strong></h5>
<NavLink to={`/item/${productDetail.id}`} type="button" className="btn btnDetalle btn-dark btn-sm">Ver detalles</NavLink>

                 

 </div>    
</div>
</div>



    )
    }

export default Item



