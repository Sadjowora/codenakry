import React from "react";
import { Link } from "react-router-dom";


function Codeur(){
	return (
		<div>
			<div className="row service my-card">
	          <div className="col-md-4">
	            <img src="codeur.png"  background="#55595c" color="#eceeef"   text="Thumbnail" alt=" " />
	          </div>
	          <div className="col-md-8">                      
	              <div className="card-body">
	              <h2> <strong> Pour les jeunes Codeurs ambitieux </strong> </h2> 
	               <p className="card-text">
	               La platforme CodeNakry est pour les jeunes codeurs un semblant de mentor lui permettant 
	               de savoir ce qu'il faut apprendre , quand il faut, et comment aussi. Les outils necessaires
	               pour tell ou tell autre dommaine. 
	               Les devellopeurs front-end seront applé a connaitre des languages comme le HTML CSS JS et une librerie ou
	               un framwork dedier, les bundler, linter ou API..
	               </p>	               
	               <Link to="/formRegistre"className="btn btn-danger">SInscrire</Link>     
	               <Link to="/Login"className="btn btn-success">Se connecter</Link>     
	            </div>
	          </div>
	      </div>
		</div>
		);
}
	
export default Codeur;