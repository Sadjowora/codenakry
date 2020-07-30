import React from "react";
import data from "../data_template.json";
import { Link } from "react-router-dom";

class Template extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			data
		};
	}

renderTemplate(){
	return this.state.data.map((item, i)=>{
		return (
				<div className="Template col-md-4" key={i}>
					<div className="card card_template ">
						<img className="card-img-top" src={item.image} alt="" />
						<div>
							<h1>{item.titre}</h1><small>({item.slogan})</small>
							<p className="card-text" > 
								{ item.libelle }
							</p>
							<strong>Debute:: {item.dateDebut} | A Finit ::{item.dateFin} <Link className="badge badge-primary"> Details >> </Link> </strong>
						</div>
						 
					</div>
				</div>
			);
     })
}

 render(){ 
   return (<div className="row container_template">
   			 <div className="col-md-12">
   				 <h2> Template de projet sur les quels nous avont travailler </h2>
   				 <div className="row">   	       
   	             { this.renderTemplate() }
   	             </div>
   	             <div className="row card-body">	              
	               <p className="Template_text col-md-10 ">
	               Les technologies du web permettent aujourd’hui de créer des applications informatiques qui n’auraient pas été possibles autrefois. 
	               Des sites, et des applications web rapides, fluides et puissantes avec une ergonomie simple et efficace. 
	               L'experience utilisateur dévient exeptionnel. Avec une telle technologie
	               vous aurez plus de visibilité et plus  de productivité donc une augmentation sur votre chiffre d'affaire.
	               Donner nous vos projets ayez confiance en nous, vous n'en sortrez que satisfait..
	               <Link to="/SadjoWora" className="badge badge-secondary">Fondateur Codenakry</Link>  
	               </p>	                         	           
	           </div>
	          </div>
   	       </div>
   	       );
  }
}

export default Template; 