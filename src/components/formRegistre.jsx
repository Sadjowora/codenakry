import React from "react";

function Registre (){
  return(
		<div className="registre col-md-8">
		<h1>Inscrivez vous profiter de nos services</h1>
		 <p><strong>Veuillez remplire tous les champs sil vous plait en validant vous accepter nos conditions..</strong></p>
			<form className="needs-validation" novalidate>
			  <div className="form-row">
			    <div className="col-md-6 mb-3">
			      <label for="validationTooltip01">Nom*</label>
			      <input type="name" className="form-control" id="validationTooltip01" required/>
			      <div className="valid-tooltip">
			        Looks good!
			      </div>
			      </div>
			      <div className="col-md-6 mb-3">
			      <label for="validationTooltip01">Prenom*</label>
			      <input type="name" className="form-control" id="validationTooltip01" required/>
			      <div className="valid-tooltip">
			        Looks good!
			      </div>
			    </div>
			  </div>
			  <div className="form-row">
			    <div className="col-md-6 mb-3">
			      <label for="validationTooltip03">Email*</label>
			      <input type="email" className="form-control" id="validationTooltip03" required/>
			      <div className="invalid-tooltip">
			        Please provide a valid city.
			      </div>
			    </div>
			    <div className="col-md-6 mb-3">
			      <label for="validationTooltip05">Mot de Passe</label>
			      <input type="password" className="form-control" id="validationTooltip05" required/>
			      <div className="invalid-tooltip">
			        Please provide a valid zip.
			      </div>
			    </div>				
			  </div>
			   <p>
			   <p><small>* En tappant sur SInscrire vous accepter notre condition dUtilisateur. Vos donne sont confidentelle</small></p>
			   <button className="btn btn-secondary" type="submit">SInscrire</button> 
				<small>Ou SIncrire par ..</small> 
				<a href="#" className="badge badge-primary"> facebook</a> 
				<a href="#" className="badge badge-danger"> Gmail</a> 
				<a href="#" className="badge badge-success"> linkedIn</a> 
			   </p>			   			   
			</form>			
		</div>
	);
}

export default Registre;