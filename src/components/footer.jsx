import React from "react";
import {Link} from "react-router-dom";


function Footer() {  
  return(  
	<footer className="text-muted">
	  <div className="container">
	    <p className="float-right">
	      <a href="#">Retourner en haute</a>
	    </p>
	    <p> La platform &copy; Codenakry, vous permet de nous garder à porter de mains pour des mission futur</p>
	    <p> La Premiere mise à jour ne depassant pas 24h est gratuite, nous seront disposer à negicier d'autre service 
			selon votre desir </p>

			<div> 
				<strong > Pour etre informer ?  suivez nous sur les reseaux sociaux </strong>
				<a href="{{}}">  <i className="fa fa-facebook" aria-hidden="true">@Facebook, </i> </a> 					
				<a href="{{}}"> <i className="fa fa-twitter">#Twitter, </i> </a> 
				<a
				 href="{{}}"> <i className="fa fa-linkedin" aria-hidden="true">@LinkedIn, </i> </a> 
				<Link to="/SadjoWora" className="btn btn-info">SadjoWora de Codenakry </Link> 
			</div>
	  </div>
	 </footer>
	)
 }

 export default Footer;