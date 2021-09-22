import Ropa from "./Item";


const ItemList = ({products}) => {
if (!products ) {
    return (
     <h1>Cargando...</h1>   
    )
}

return (
<div class="card-columns col-sm 4 row mx-8 justify-content-center">
    
    {products.map(r => <Ropa key={r.id}  name={r.name} marca={r.marca}  img={r.img} />)}

    
</div>

)



}





export default ItemList;













