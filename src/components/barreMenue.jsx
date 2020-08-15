import React from "react";
import '../styles/index.css';
import { Link } from "react-router-dom"; 

function Menue(){
return ( 
 <header>
  <div className="collapse bg-dark" id="navbarHeader">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4">
          <h4 className="text-white">A Propos</h4>
          <p className="text-muted">
          CodeNakry est developper par Diallo Mamadou Sadjo, ingenieur informatique, developpeur web front-end ReactJs.
          Freelance, entrepreneur depuis un moment il est qualifié pour developper des sites et des application web puissantes
          et rapides. Prennez pour vos projets web à travers tous les reseaux.
          </p>
        </div>
        <div className="col-sm-4 offset-md-1 py-4">
          <h4 className="text-white">Contact</h4>
          <ul className="list-unstyled">
            <li><a href="twitter.com/@Sadjowora" className="text-white">Tel: 620027539 </a></li>
            <li><a href="twitter.com/@Sadjowora" className="text-white">Suivre sur Twitter</a></li>
            <li><a href="fb.com/@geniewora" className="text-white"> Liker sur Facebook</a></li>
            <li><a href="instagram.com/@geniewora" className="text-white"> Suivre sur Instagram</a></li>
            <li><a href="mail.google.com/geniewora@gmail.com" className="text-white">Par Mail</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    <div className="navbar navbar-dark bg-purple shadow-sm">
      <div className="container d-flex justify-content-between">
        <Link to="/" className="navbar-brand d-flex align-items-center">
         <img src="favicon.png" width="27" height="25" alt="le logo CodeNakry" />
         <strong>CodeNakry.</strong>
        </Link>
          
           <div className="menue-items">
             <Link to="/Profile" >
               <strong > Espace Codeur </strong>   
             </Link>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              A propos <span className="navbar-toggler-icon"></span>
            </button>            
          </div>
      </div>
    </div>
</header>
		)
}

export default Menue;