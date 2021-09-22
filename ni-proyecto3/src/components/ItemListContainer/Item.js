import React from "react";



const Ropa = ({ name,marca, img,}) => {

    return (
        <div class="font">
<div class="card card border-bottom card1 " >
<img src={img}class="card-img-top rounded shadow p-3 mb-5 bg-white rounded "/>
<div class="card-body  ">
<h5 class="card-title "><strong>{name}  {marca}</strong></h5>

                 
 
 </div>    
</div>

 
 </div>




    )
    }

export default Ropa



