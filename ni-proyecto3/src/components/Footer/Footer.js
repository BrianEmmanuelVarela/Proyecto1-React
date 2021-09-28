


const Footer = () => {
    return(
        <footer className="bg-dark text-white font">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-3 col-sm-6 pb-2">
              <h6>About us</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non quasi at cum deserunt! Beatae maxime, aut voluptates pariatur expedita ut accusantium ipsa doloribus blanditiis modi possimus commodi doloremque porro.</p>
            </div>
            <div className="col-lg-3 col-sm-6 pb-2">
              <h6>Usefull Links</h6>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 pb-2">
              <h6>Contac Us</h6> 
              <p>
                {/* <address>SCO 3456 sector 4412,New Delo</address> */}
                <strong>Phone:</strong> +91-0015563<br/>
                <strong>Email</strong> <a href="North@hotmail.com">North.com</a>
              </p>
            </div>
            <div className="col-lg-3 col-sm-6 pb-2">
               <h6>Newsletters</h6>
               <p>Enter your email below:</p>
               <form action="">
                 <div className="input-group">
                  <input type="email" name="" id="" className="form-control"/>
                  <div className="input-group-append">
                    <button className="btn btn-secondary">Suscribe</button>
                  </div>
                 </div>
               </form> 
            </div>
          </div>
        </div>   
      <div className="container-fluid text-center bg-secondary">
        &copy;2021.All rigths are reserved
      </div>
       </footer>

    )
}


export default Footer