import React from "react";
import data from "../data_template.json"; 
import {FaList, FaHistory} from "react-icons/fa"; 
import { BrowserRouter as Router,
	Switch,
	Route, 
	Link
} from "react-router-dom";


function RenderTemplate(props){ 
		return (
				<div className="Template col-md-4" >
					<div className="card card_template">
						<img className="card-img-top" src={props.item.image} alt="" />
						<div className="">
							<h1 className="">{props.item.titre}</h1><small>({props.item.slogan})</small>
							<p className="card-text" > 
								{ props.item.idee }
							</p>
							<p >
							<strong className="col-md-10"> Debute:: {props.item.dateDebut} | A Finit ::{props.item.dateFin} </strong>
							<Link to="/TemplateDetails" className="badge badge-success col-md-2" onClick={props.onClick } >Details &nbsp; 
                 			<FaList /></Link> </p>
						</div>						 
					</div>
				</div>
			);
}

class Template extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			data,
			affiche: '',
		};
	}

JustClick = (id)=>{
 return this.state.data.map((item)=>{ 	 	
 	if(item.id === id){	
 		const rendue = (
	     	<div className="row TemplateOne shadow-sm">
			 	<div className="col-md-6">
				 <img className="card-img-top" src={item.image} alt="" />
				</div>
				<div className="col-md-6">
					<h1>{item.titre}</h1><small>({item.slogan})</small>
					<p className="card-text" > 
						{ item.idee }
					</p>
					<p className="card-text" > 
						{item.libelle }
					</p>
					<p> <strong>Debute:: {item.dateDebut} | A Finit ::{item.dateFin} </strong> </p>
					<div> <Link to="/" className="btn btn-info"> Retour à la liste <FaHistory/></Link> </div>
				</div>						 		  
			</div>						 		  
		  );
	        this.setState({affiche: rendue });
        } else  return '';
    });
}

 render(){ 
   return ( <Router>   				  			
    	       <div>   			 
    	         <div className="container_template">   			 
   				  <h2> Template de projet sur les quels nous avont travailler </h2>
   				  <div className="row">    	               
   	               <Switch> 
	   	               <Route exact path="/">
	   	               	{()=>{ 
	   	               		return this.state.data.map((item, i)=>{	   	               		 
	   	                    return  <RenderTemplate key={i} item={item} onClick={()=>this.JustClick(item.id)}/>	
	   	               		});
	   	               	  }
	   	               	}

	   	               </Route>
	   	               <Route path="/TemplateDetails"> 
	   	                 {this.state.affiche}
	   	               </Route>
   	               </Switch>
   	             </div>   	             	         
                <div className="row card-body">
                    <h3>Les technologies de developpement web</h3>
	                <p className="Template_text col-md-11 my-card">		               
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
   	      </Router>
   	    );
   }
}


export default  Template; 