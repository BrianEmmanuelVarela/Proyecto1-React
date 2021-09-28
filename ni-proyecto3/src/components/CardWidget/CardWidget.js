import { Link } from 'react-router-dom';


const CardWidget = ({cartCount}) => {
    return (
        <>
     <Link to ={`/cart`} >   <button type="button" class="btn btn-light"><i class="fas fa-shopping-bag">0</i></button></Link>
        <p className="cartCount">{cartCount}</p>
        </>
    )
}

export default CardWidget