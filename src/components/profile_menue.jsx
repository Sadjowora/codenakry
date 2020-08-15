import React from "react" ;  
import ProfileBody from './profile_body.jsx';
import Mobile from './mobile.jsx';
import Web from './web.jsx';
import Metiers from './metiers.jsx';
import Program from './program.jsx';
import Footer from './footer.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const routes =  [
	{
		path: "/Profile",
		exact: true,
		sidebar: () => <h2> Accueil</h2>,
		main: () => <ProfileBody />
	},
	{
		path: "/Profile/devWeb",
		sidebar: () => <h2>devWeb</h2>,
		main: () => <Web/>
	},
	{
		path: "/Profile/Mobile", 
		sidebar: () => <h2>Mobile</h2>, 
		main: () => <Mobile/>
	},
	{
		path: "/Profile/Metiers", 
		sidebar: () => <h2>Metiers</h2>, 
		main: () => <Metiers/>
	},
	{
		path: "/Profile/Program",
		sidebar: () => <h2>Program</h2>,
		main: () => <Program />
	}
];

 function Profile (props){
	return (
		<Router>
			<div className="row"> 
			  <div className="col-md-2 menueProfile"> 								 
			 	<div> 
				 	<img src="logo192.png" width="60" height="60" alt="avatar" />
				 	<h3>Sadjowora</h3>
			 	</div>
				<hr/>
				<nav className="nav nav-pills flex-column  ">
					 <Link to="/Profile" className="flex-sm-fill text-sm-left nav-link active" >Aceuil</Link>
					 <Link to="/Profile/devWeb" className="flex-sm-fill text-sm-left nav-link" >Developpement Web</Link>
					 <Link to="/Profile/Mobile" className="flex-sm-fill text-sm-left nav-link" >Developpement Mobile</Link>
					 <Link to="/Profile/Metiers" className="flex-sm-fill text-sm-left nav-link" >Metiers du web </Link>					  			
					 <Link to="/Profile/Program" className="flex-sm-fill text-sm-left nav-link" >Suivre un Program</Link>					
				</nav>
				<hr/>
				<nav className="nav nav-pills flex-column  ">
					 <Link className="flex-sm-fill text-sm-left nav-link" >Framework / Librarie</Link>
					 <Link className="flex-sm-fill text-sm-left nav-link" >Outils</Link>
					 <Link className="flex-sm-fill text-sm-left nav-link" >Conceptes</Link>
					 <Link className="flex-sm-fill text-sm-left nav-link" >A propos </Link>
					 <form className="inline-form">
					 <input type="text" className="form-control" placeholder="Recherche"/> 
					 <button className="btn btn-info inline-form">Go</button>
					 </form>
					 <hr/>
					 <a href="#" > <small>Condition dUtlisation..</small> </a>
				</nav>					
		      </div>
			  <div className="col-md-9 profile_menue_body">
			  <div >			    				 
	         <Switch>
	            {routes.map((route, index) => ( 
	              <Route
	                key={index}
	                path={route.path}
	                exact={route.exact}
	                children={<route.main />}
	              />
	            ))}
	          </Switch>	          
             </div>
			  </div>
			</div>
			<Footer />
             </Router>
		);
}

export default Profile;