import React from "react";


const Home = () =>{
return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  src='../img/carrusel1.jpg' className="d-block w-100 carrusel" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src='../img/carrusel2.jpg' className="d-block w-100 carrusel" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src='../img/carrusel3.jpg' className="d-block w-100 carrusel" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
)


}

export default Home