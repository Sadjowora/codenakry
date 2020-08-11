import React from "react";
import citation from './citation';
 class Citation extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      keyArr: Object.keys(citation),
    }
  }
 
  render(){
    
     return (
            <div className="navliste"> 
                <h2>Toutes les citations</h2>                 
            <hr/>
              { this.state.keyArr.map(citatio =>(
                <div key={citatio} className="container">
                  <ul  className="list-group">
                    <li className="list-group-item">
                      <button onClick={()=>this.seeIndex(citatio)}> {citation[citatio].Auteur}  </button>
                    </li>
                  </ul>
                </div>
                  ))
                }
            </div>
        ); 
     }
  }
  
export default Citation;