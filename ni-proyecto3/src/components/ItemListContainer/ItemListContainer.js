const ItemListContainer = (props) => {
    console.log(props)
return (
    <div>
        <p style={{color: 'red'}}>ACA VA EL CONTENIDO </p>
 
{props.children}
       
    </div>
)











}
export default ItemListContainer