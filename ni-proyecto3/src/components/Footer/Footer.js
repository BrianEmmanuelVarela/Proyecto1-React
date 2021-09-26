


const Footer = () => {
    return(
        <footer class="bg-dark text-white font">
        <div class="container py-3">
          <div class="row">
            <div class="col-lg-3 col-sm-6 pb-2">
              <h4>About us</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non quasi at cum deserunt! Beatae maxime, aut voluptates pariatur expedita ut accusantium ipsa doloribus blanditiis modi possimus commodi doloremque porro.</p>
            </div>
            <div class="col-lg-3 col-sm-6 pb-2">
              <h4>Usefull Links</h4>
              <ul class="list-unstyled">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div class="col-lg-3 col-sm-6 pb-2">
              <h4>Contac Us</h4> 
              <p>
                <address>SCO 3456 sector 4412,New Delo</address>
                <strong>Phone:</strong> +91-0015563<br/>
                <strong>Email</strong> <a href="North@hotmail.com">North.com</a>
              </p>
            </div>
            <div class="col-lg-3 col-sm-6 pb-2">
               <h4>Newsletters</h4>
               <p>Enter your email below:</p>
               <form action="">
                 <div class="input-group">
                  <input type="email" name="" id="" class="form-control"/>
                  <div class="input-group-append">
                    <button class="btn btn-secondary">Suscribe</button>
                  </div>
                 </div>
               </form> 
            </div>
          </div>
        </div>   
      <div class="container-fluid text-center bg-secondary">
        &copy;2021.All rigths are reserved
      </div>
       </footer>

    )
}


export default Footer