import React from "react";
import firebase from "./firebase";
import ReactDOM from "react-dom"; 
import Menue from './components/barreMenue.jsx';
import Footer from './components/footer.jsx';
import Start from './components/showslide.js'; 
import CardClient from './components/cardClient.jsx'; 
import FormContact from './components/formulaireContact.jsx'; 
import Template from './components/Template.jsx';     
import Codeur from './components/codeur.jsx';
import Registre from './components/formRegistre.jsx';
import Profile from './components/profile_menue.jsx';
import Web from './components/web.jsx';
import SadjoWora from './components/myself.jsx';
import Login from './components/login.js';
import "./styles/index.css";
import "./styles/album.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component{
    constructor(props){
      super(props);
      this.state={
        missions: [] ,
      }
    }

 updateData(){
  const db = firebase.firestore();
  const settings = {timestampsInSnapshots: true};
  db.settings (settings);
  db.collection('missions').get()
  .then((snapshots)=>{
    let missions = [];
    snapshots.forEach((doc)=>{
      let mission = Object.assign({id: doc.id}, doc.data());
      missions.push(mission);
    });
      this.setState({missions: missions});
  })
  .catch((err)=>{
    console.log('Erreur survenue', err)
  })
 }

componentWillMount(){
  this.updateData();
}

componentWillUpdate() {
  this.updateData();
}


render(){
   return (
     <Router>
      <div>
          <Menue/>
          <Switch>
              <Route exact path="/">
                <Start />
                <CardClient />
                <FormContact missions={this.state.missions} />
                <Template />
                <Codeur />
                <Footer />
              </Route>
                <Route path="/formulaireContact">
                  <FormContact items={this.state.missions} updateData={this.updateData.bind(this) }/>
                </Route>
                <Route path="/TemplateDetails">
                  <Template />
                </Route>
                  <Route path="/codeur">
                    <Codeur/>
                  </Route>
                <Route path="/formRegistre">
                  <Registre/>
                </Route>
               <Route path="/Login">
                <Login />
              </Route>
              <Route path="/Profile">
                <Profile />
              </Route>
               <Route path="/web">
                   <Web/>
                </Route>
                 <Route path="/SadjoWora">
                   <SadjoWora/>
                </Route>       
          </Switch>
      </div>
     </Router>
    );
  }
}


ReactDOM.render(  
    <App/>,
    document.getElementById('root') 
);