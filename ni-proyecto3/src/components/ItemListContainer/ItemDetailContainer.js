import Detail from "./ItemDetail";


const Productosdetail = ({details}) => {
    return (
    <div class="card-columns col-sm 4 row mx-8 justify-content-center">
        
        {details.map(d => <Detail key={d.id}   talle={d.talle} color={d.color} precio={d.precio} />)}
    
        
    </div>
    
    )
    
    
    
    }


    export default Productosdetail;