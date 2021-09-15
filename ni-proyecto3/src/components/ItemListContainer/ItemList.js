import Ropa from "./Item";


const Productoslista = ({ropa}) => {
return (
<div class="card-columns row mx-8 justify-content-center ">
    {ropa.map(r => <Ropa key={r.id} name={r.name} marca={r.marca} talle={r.talle} color={r.color} precio={r.precio} img={r.img} />)}
</div>
)



}





export default Productoslista;













