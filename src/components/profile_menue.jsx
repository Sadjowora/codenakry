import React from "react" ;  
import ProfileBody from './profile_body.jsx';
import Mobile from './mobile.jsx';
import Codeur from './codeur.jsx';
import Desktop from './desktop.jsx';
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
		path: "/Profile/web",
		sidebar: () => <h2>Web</h2>,
		main: () => <Codeur/>
	},
	{
		path: "/Profile/Mobile", 
		sidebar: () => <h2>Mobile</h2>, 
		main: () => <Mobile/>
	},
	{
		path: "/Profile/Mobile", 
		sidebar: () => <h2>Desktop</h2>, 
		main: () => <Desktop/>
	}
];

 function Profile (props){
	return (
		<Router>
			<div className="row"> 
			  <div className="col-md-2 menueProfile bg-dark"> 								 
			 	<div> 
				 	<img src="logo192.png" width="60" height="60" alt="avatar" />
				 	<h3>Sadjowora</h3>
			 	</div>
				<hr/>
				<nav className="nav nav-pills flex-column  ">
					 <Link to="/Profile" className="flex-sm-fill text-sm-left nav-link active" >Aceuil</Link>
					 <Link to="/Profile/web" className="flex-sm-fill text-sm-left nav-link" >Web</Link>
					 <Link to="/Profile/Mobile" className="flex-sm-fill text-sm-left nav-link" >Mobile</Link>
					 <Link to="/Profile/Desktop" className="flex-sm-fill text-sm-left nav-link" >Desktop </Link>					
					 <Link to="/Profile/DevOps" className="flex-sm-fill text-sm-left nav-link" >DevOps</Link>					
					 <Link to="/Profile/Forum" className="flex-sm-fill text-sm-left nav-link" >Forum Locale</Link>					
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
			  <div className="col-md-8">
			  <Switch>
				{
					routes.map((route, index) =>(
						<Route 
						key={index}
						path={route.path}
						exact={route.exact}
						children={<route.sidebar/>}
						/>							
				 ))}
			</Switch> 				 	
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
             </Router>
		);
}

export default Profile;