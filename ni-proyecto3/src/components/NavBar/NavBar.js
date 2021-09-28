
import img from './skull.png'
import CardWidget from '../CardWidget/CardWidget';
import { NavLink,Link } from 'react-router-dom';

const NavBar = ()  => {
    return(
      
      <nav className="navbar navbar-light bg-white d-flex justify-content-around">
        
   
      <div>
        <Link to="/">
        <img className="img" alt ="producto" src={img}/>
        </Link>
        </div>
      
    
     <NavLink to ='/hombres'>   <button type="button" className="btn btn-light button"><strong>HOMBRES</strong></button></NavLink>
     <NavLink to='/mujeres'>   <button type="button" className="btn btn-light button"><strong>MUJERES</strong> </button></NavLink>
     <NavLink to='/niños'>   <button type="button" className="btn btn-light button"><strong>NIÑOS</strong></button></NavLink>
     <NavLink to='/marcas'>   <button type="button" className="btn btn-light button">MARCAS </button></NavLink>
       <NavLink to='/deportes'> <button type="button" className="btn btn-light button">DEPORTES</button> </NavLink>
          
      
      
       
      
      
      <i className="fas fa-user-alt"></i>
      <CardWidget/>
      <i className="fas fa-search"></i>

      <form className="form-inline">
        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Buscar</button> 
       
        
      </form>


</nav>
    )
}
export default NavBar