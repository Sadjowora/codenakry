import React from "react";
import firebase from "firebase"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FormContact extends React.Component{
 addContact = (e)=> {
	e.preventDefault();
	let newContact = {
		NomComplet: e.target.NomComplet.value,
		email: e.target.email.value,
		entreprise: e.target.entreprise.value,
		libelle: e.target.libelle.value,
	}
	  const db = firebase.firestore();
	  const settings = {timestampsInSnapshots: true};
	  db.settings (settings);
	  db.collection('missions').add(newContact);
	  document.getElementById('addContact').reset();
 }

render() {
	return (
		<div className="row my-card"> 		   
		  <div className="recherche col-md-6 ">
		    <h3>Veuillez Nous contacter à travers ce formulaire </h3>
		    <strong>Les champs avec astéris sont obligatoire assuré vos information sont privé..</strong>
			<form className="needs-validation" id="addContact" onSubmit={this.addContact.bind(this)} >
			  <div className="form-row">
			    <div className="col-md-12 mb-3">
			      <label htmlFor="nomComplet">Nom Complet*</label>
			      <input type="text" className="form-control" id="NomComplet" required/>
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
			      <label htmlFor="entreprise">Entreprise <small>(personne morale)*</small> </label>
			      <input type="text" className="form-control" id="entreprise" required/>
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
				<a href="#" className="badge badge-info"> facebook</a> 
				<a href="#" className="badge badge-success"> twitter</a> 
				<a href="#" className="badge badge-danger"> linkedIn</a> 
			   </p> 	   
			</form>						
		 </div>
	 	 <div className="col-md-4 ">
		 	<h3>Les missions et message de contacte</h3>		 	 
	        { this.props.missions.map((item)=> {
	           return(
	                <div className="mission">
	                <strong>{item.NomComplet}</strong>: 
	                <small>{item.email}</small><br/>
	                <strong>{item.entreprise}</strong><br/>
	                <small className="">{item.libelle}</small>
	                </div>  )
	         })
	       }
	        </div>
	  </div>
	 );
  }
}

export default FormContact;