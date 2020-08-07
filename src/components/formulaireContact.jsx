import React from "react";

function FormContact(props){
	return (
		<div className="row my-card"> 		   
		  <div className="recherche col-md-6 ">
		    <h3>Veuillez Nous contacter à travers ce formulaire </h3>
		    <strong>Les champs avec astéris sont obligatoire assuré vos information sont privé..</strong>
			<form className="needs-validation" >
			  <div className="form-row">
			    <div className="col-md-12 mb-3">
			      <label htmlFor="nomComplet">Nom Complet*</label>
			      <input type="text" className="form-control" id="nomComplet" required/>
			      <div className="valid-tooltip">
			        Looks good!
			      </div>
			    </div>
			  </div>
			  <div className="form-row">
			    <div className="col-md-6 mb-3">
			      <label htmlFor="email">Email*</label>
			      <input type="email" className="form-control" id="email" required/>
			      <div className="invalid-tooltip">
			        Please provide a valid city.
			      </div>
			    </div>
			    <div className="col-md-6 mb-3">
			      <label htmlFor="Entreprise">Entreprise <small>(personne morale)*</small> </label>
			      <input type="text" className="form-control" id="Entreprise" required/>
			      <div className="invalid-tooltip">
			        Please provide a valid zip.
			      </div>
			    </div>

			    <div className="input-group">
				 <div className="input-group-prepend">
				    <span className="input-group-text">Votre Mission*</span>
				   </div>
				  <textarea className="form-control" aria-label="With textarea" id="libelle"></textarea>
				</div>				
			  </div>
			   <p>
			   <button className="btn btn-secondary" type="submit">Envoyer Demande</button> 
				<small>Ou par ..</small> 
				<a href="#" className="badge badge-primary"> facebook</a> 
				<a href="#" className="badge badge-info"> twitter</a> 
				<a href="#" className="badge badge-success"> linkedIn</a> 
			   </p> 	   
			</form>						
		 </div>
	 	<div className="col-md-4 ">
	 	
        </div>
	  </div>
	 );
}

export default FormContact;