
import img from './skull.png'
import CardWidget from '../CardWidget/CardWidget';

const NavBar = ()  => {
    return(
      
      <nav class="navbar navbar-light bg-white d-flex justify-content-around">
        
   
      <div><img class="img" src={img}/></div>
       <button type="button" class="btn btn-light button"> <strong>HOMBRES</strong></button>
      <button type="button" class="btn btn-light button"> <strong>MUJERES</strong></button>
      <button type="button" class="btn btn-light button"> <strong>NIÑOS</strong></button>
      <button type="button" class="btn btn-light button"> MARCAS</button>
      <button type="button" class="btn btn-light button"> DEPORTE</button>
      <button type="button" class="btn btn-light button"> COLECCION</button>
      <i class="fas fa-user-alt"></i>
      <CardWidget/>
      <i class="fas fa-search"></i>

      <form class="form-inline">
        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Buscar</button> 
       
        
      </form>


</nav>
    )
}
export default NavBar