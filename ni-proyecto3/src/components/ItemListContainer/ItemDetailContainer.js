import ItemDetails from "./ItemDetail";


const ItemDetailContainer = ({details}) => {
    return (
        <div>
        {details.map(d => <ItemDetails key={d.id} name={d.name} marca={d.marca} talle={d.talle} color={d.color} precio={d.precio} />)}
   </div>
    )
}

export default ItemDetailContainer;