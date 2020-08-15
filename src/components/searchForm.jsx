import React from "react";

function SearchForm(props){
	return(
		<div className="col-md-12 recherche">
		 <h2>Voicis la liste de toutes les Missions effectués.</h2>
			<form className	="input-group mb-3">
				<button className="btn btn-secondary" >TodoList</button >
				<button className="btn btn-secondary" onClick={props.onClick}>Codeurs</button>
				<input type="text" className="form-control" placeholder="Recherche Missions..,  Contacts.."/>
				<div className="input-group-append">
				<button className="btn btn-outline-primary" type="button"> Rechercher </button>
				</div>
			</form>
		</div>
		);
}

export default SearchForm;