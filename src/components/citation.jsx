import React from "react";
import citation from './citation';

class Citation extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      keyArr: Object.keys(citation),
    }
  }
 
componentDidMount() { 
     const randokey = this.state.keyArr[Math.floor(Math.random() * this.state.keyArr.length)];
     this.setState(citation[randokey]);
 }
render(){
   return (
          <div className="my-card"> 
            <h2>Booster votre motivation:</h2>                 
            <hr/>               
            <div className="citation">
              <p>" {this.state.citation} "</p>
             <label>{this.state.Auteur}.</label>                
            </div>                      
          </div>
      ); 
   }
}

export default Citation;