import React from "react";
import userData from "../userData.json";   
import Profile from "./profile_menue.jsx";   
import { Link, Redirect } from "react-router-dom";


class Login extends React.Component{
  constructor (props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.state = {
			userData,
			email: '',
			password: '',
		}
	}

morte = ()=> {
 	 this.state.userData.map((item)=>{
	   if((item.email === this.state.email) && (item.password === this.state.password)) {
		     return console.log("cest bon pour les infos <Redirect to=/> ");		     					
	       }
      });
 }

handleSubmit = (i)=>{
   i.preventDefault();
   return this.morte();
   //<Redirect to="/" />;
 }

 handleChange2 = (e)=> {
	const value = e.currentTarget.value;
	this.setState({password: value});
 }

 handleChange = (event) =>{
 	const value = event.currentTarget.value;
 	 this.setState({email: value});
 }


render(){  
   return(
		<div className="registre col-md-8">
   		    <h1>Connecter vous !</h1>
		    <p><strong>Vous pouvez garder votre session ouverte pour ne pas avoir à vous reconnecter</strong></p>
			<form className="needs-validation" novalidate onSubmit={(i)=>this.handleSubmit(i)} >
		
			  <div className="form-row">
			    <div className="col-md-6 mb-3"> 
			      <input type="email" className="form-control" value={this.state.email} placeholder="example@gmail.com" onChange={(i)=>this.handleChange(i)} required/>
			      <div className="invalid-tooltip">
			        Please provide a valid city.
			      </div>
			    </div>
			    </div>
			  <div className="form-row">
			    <div className="col-md-6 mb-3"> 
			      <input type="password" className="form-control" value={this.state.password} placeholder="mot de passe" onChange={(i)=>this.handleChange2(i)} required/>
			    </div>				
			  </div>
			  <Link  to="/Profile" className="btn btn-info" type="Submit" >Connexion</Link> 
			  </form>
			   <p>
			   <p><small>* En tappant sur SInscrire vous accepter notre condition dUtilisateur. Vos donne sont confidentelle</small></p>			   
				<small>Ou  par ..</small> 
				<a href="#" className="badge badge-primary"> facebook</a> 
				<a href="#" className="badge badge-danger"> Gmail</a> 
				<a href="#" className="badge badge-success"> linkedIn</a> 
			   </p>			   			   
						
		</div>
	);
  }
}

export default Login;