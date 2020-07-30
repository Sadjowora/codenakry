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
          MissionsCodeur  est une platforme de gestions des missions freelance par contact ou client
          Toutes personne accedant a la platforme peut voire la mission en coure et suivre sont evolution
          ou demander a y participer de maniere tres volotaire et non remurable cela aide les jeunes Codeur
          et foncer dans le grand et etre en contact avec les plus experimenté. Bon code a vous!!!!
          </p>
        </div>
        <div className="col-sm-4 offset-md-1 py-4">
          <h4 className="text-white">Contact</h4>
          <ul className="list-unstyled">
            <li><a href="twitter.com/Sadjo Wora Diallo" className="text-white">Follow on Twitter</a></li>
            <li><a href="fb.com/geniewora" className="text-white">Like on Facebook</a></li>
            <li><a href="mail.google.com/geniewora@gmail.com" className="text-white">Email me</a></li>
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
          
           <div>
             <Link to="/formulaireContact" className="btn btn-danger" type="button"  >
              Nous Contacter             
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