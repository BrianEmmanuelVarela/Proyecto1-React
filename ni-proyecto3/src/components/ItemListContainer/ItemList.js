import Ropa from "./Item";


const Productoslista = ({ropa}) => {
return (
<div class="card-columns col-sm 4 row mx-8 justify-content-center">
    
    {ropa.map(r => <Ropa key={r.id}  name={r.name} marca={r.marca}  img={r.img} />)}

    
</div>

)



}





export default Productoslista;













