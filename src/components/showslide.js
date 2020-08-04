import React from "react";
import "../styles/index.css";
import "../styles/album.css";
import '../styles/index.css';
import { Link } from "react-router-dom";


class Start extends React.Component{
render(){
	const titre = "Co{de}Nakry";
	return(
	  <section className="jumbotron jumbotron-mission">
	    <div className="container">	    
	       <h1 className="display-4"><strong> {titre} </strong></h1>
	       <small>Nous vous aidons à attendre vos objectifs!</small>	    
		   <p>
		   	CodeNakry est une platforme ous permettant d'entré en contacte avec un developpeur web <br/>
		   	pour vous aider à developper votre site ou application web, adapter à Nimporte quell dispositif.<br/>
		   	Elle permet aussi dAccompagner les jeunes developpeur dans apprentissage par des articles dediée.
		   </p>
	       <p>
		    <Link to="/formulaireContact" className="btn btn-success" > Nous contacter </Link>
		    <Link to="/formRegistre" onClick={this.props.onClick} className="btn btn-danger"> SInscrire</Link>
		    <Link to="codeur" > Je suis Codeur. </Link>
	       </p>
	       <div className="bg-mission"> </div>
	    </div>
	  </section>
	)
  }
}
export default Start;