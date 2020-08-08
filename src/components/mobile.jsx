import React from "react";

function Mobile() {
 return (
		<div className="mobile">	    	
	        <p className="my-card">
	        <h2> Technologies de développement d'applications Mobile </h2>
				De la même manière que le developpemet de site et d'application web, il est primordiale de 
				d'effectuer une bonne expression des besoins. pour essayer de determiner quel est la technologies
				la mieux adapter au projet que vous voulez developpemet.
	        </p>
	        
	        <p className="my-card">
				Il y'en à plusieurs technologies permettant de developper une application Mobile natives donc hybrides ou cross plateforme					       
	        <ul className="col-md-8  list-group-flush listing">
	            <li className="list-group-item">Cordova:<br/>
	            	<small> 
	            	Framework permettant de s'appuyer sur les technologies de programmation web pour
	            	concevoir des application mobiles.
	            	</small>
	            </li>	             
	            <li className="list-group-item">React Native <br/>
	            	<small> 
	            	C'est un Framework devenue très populaire pour la création d'application mobiles Android et IOS.
	            	</small>
	            </li>
	            <li className="list-group-item">Ionic <br/>
	                <small> 
	            	Framework open source pour la création d'application mobiles hybrides
	            	</small>
	            </li>
	            <li className="list-group-item">Kotlin</li>
	            <li className="list-group-item">Swift</li>
             </ul>
	        </p>
		</div>
	);
} 

export default Mobile;