import Item from "./Item";


const ItemList = ({products}) => {
if (!products ) {
    return (
     <h1>Cargando...</h1>   
    )
}

return (
<div className="card-columns col-sm 4 row mx-8 justify-content-center">
{products.map(product=> <Item key={product.id}  productDetail={product}/>)}

    
      

</div>

)



}





export default ItemList;













