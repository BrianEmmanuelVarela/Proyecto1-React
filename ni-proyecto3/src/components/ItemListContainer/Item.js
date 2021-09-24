import React from "react";



const Ropa = ({name,marca,img}) => {

    return (
       <div class="font">
<div class="card card border-bottom card1 " >
<img src={img} alt ="producto" class="card-img-top rounded shadow p-3 mb-5 bg-white rounded "/>
<div class="card-body  ">
<h5 class="card-title "><strong>{name}  {marca}</strong></h5>

 <button type="button" class="btn btn-secondary btn-sm"> Ver detalles</button> 
                 

 </div>    
</div>
</div>



    )
    }

export default Ropa



