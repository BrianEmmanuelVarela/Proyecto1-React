import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from 'react-router-dom';


const ItemDetail = ({item}) => {
 
  const [ count , setCount] = useState(0);
  
  
 

    return (
        <div className="font">
{/* <div class="card card border-bottom card1 " >

<img src={producDetail?.img} alt ="..." class="card-img-top rounded shadow p-3 mb-5 bg-white rounded "/>

<h5><strong>{producDetail?.name} {producDetail?.marca}</strong></h5>
<div class="card-body  ">
<h6>Color: <strong> {producDetail?.color}</strong> </h6>
<h6> Talle: <strong> {producDetail?.talle} </strong></h6>
<span class="badge badge-light"><h6><strong><p class="card-text">${producDetail?.precio}</p></strong></h6>  </span> */}

    <ul className="list border rounded " >
  <li className="media">
    <img src={item?.img} className="mr-5 imgD" alt="..."/>
    <div className="media-body">
    <li> <h6 className="mt-0 mb-1">Articulo :<strong> {item?.name} </strong> </h6></li>
      <li>Marca: <strong>{item?.marca} </strong> </li>
      <li>Color: <strong> {item?.color}</strong>    </li>
      <li>Talle: <strong> {item?.talle} </strong></li>
      <li><span className="badge badge-light"><h6><strong><p className="card-text">Precio :${item?.precio}</p></strong></h6>  </span></li>
      <p>Stock disponible : <strong> {item?.stock} </strong></p>
    
    <ItemCount count={count} setCount={setCount} item={item} /> 
    <Link  className="" to={`/cart`}>
                        <button type="button"className=" btn btn-danger btn-lg  button1 text-ligth " >
                            Ver mis compras
                        </button>                    
                    </Link>
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

