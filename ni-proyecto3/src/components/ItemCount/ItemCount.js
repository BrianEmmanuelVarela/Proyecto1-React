
import '../ItemListContainer/ItemListContainer.css'



const ItemCount = ({item , count , setCount}) =>{


const subtFunction =() => {
    if (count > 0) {
      setCount (count - 1)  
    } 
}
const addFunction = () =>{
    if (count < item.stock){
       setCount (parseInt(count + 1))
    } 
}
const handleImpCant = ( {target} ) => {
    
    if(target.value >= 0 && target.value <= item.stock){
        
        setCount(parseInt(target.value))
    }
} 

const clickSelectValue = ( { target } ) => {
    target.select()
}


    return(
        <><input type='number' value={count} onChange={handleImpCant} onClick={clickSelectValue} />
        <div className="row d-flex justify-content-around  ">
        
       <button type="button" className="btn btn-light btn-sm button1 text-dark " onClick={subtFunction}>-</button>
      
                    
                    
              
        
         <button type="button"className="btn btn-light btn-sm button1 text-dark  " onClick={addFunction}>+</button>
        
        </div>
        
        
       
       
   <div> <a href="dangerouslySetInnerHTML" className="btn btn-dark btn-lg  button1 text-ligth">Agregar al carrito</a></div>
   </>

    );
    }

export default ItemCount;