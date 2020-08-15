import React from "react";

function CardClient(props){
  const titre = "Startupeur et futur Entrepreneur";
  const titre2 = "Entreprise, PME et Institution, Particulier "; 
	return(
    <div className="col-md-12">
      <div className="row service shadow-sm ">
          <div className="col-md-2"> 
          </div>
          <ul className="col-md-8  list-group-flush listing">
            <li className="list-group-item">Vous avez un projet ou une entrprise ?</li>
            <li className="list-group-item">Vous etes Startupeur ou entrepreneur ?</li>
            <li className="list-group-item">Vous avez besoin dUn site web ou dUne application web flexible ?</li>
            <li className="list-group-item">Vous etes un jeune qui reve devenir developpeur professionel ? </li>
            <li className="list-group-item">Pour Augmenté votre visiblité ou votre expertige et chiffre dAffaire contacter nous.. </li>
         </ul>
      </div>
    <div className="row service shadow-sm">
        <div className="col-md-4">
          <img src="entrepreneur.png"  background="#55595c" color="#eceeef"   text="Thumbnail" alt={titre} />
        </div>
        <div className="col-md-6">                      
            <div className="card-body">
            <h2> <strong>{titre}</strong> </h2> 
             <p className="card-text">
             Pour augmenté votre credibilité, ou votre votre visibilité afin dêtre productif, vous avez besoin dUn outils intelligent,
             dUn blogue ou encor dUne application adaptée à votre besoin. Alors vous avez besoin dUn specialiste donc dUn developpeur.
             Pour repondre au demande constante de ses clients un site web à besoin dEtre fluide et leger, adapter à nImporte quel taille dEcrant.
             Codenakry vous mets en contacte avec un developpeur pour votre projet. Vous nAvez quA nous contacter.
             Confier nous vos projets vous nEn serrez que satifait...
             </p>               
             </div>
        </div>
    </div>
      <div className="row service shadow-sm">        
          <div className="col-md-2">
          </div>
          <div className="col-md-6">                                  
              <div className="card-body">
              <h2> <strong>{titre2}</strong> </h2> 
               <p className="card-text">
               A lheur dInternet et de la digitalisation toutes entreprise ou PME est dans le besion de 
               ce munir dUn site web ou dUne application pour etre plus credible. 
               Internet est par exellence le moyen le plus facile dAtteindre une forte audience sur toute lEtendue de la terre.
               Alors un outils mettants en evedence les services dUn entreprise ferait forte impression et augmenterai la credibilité de cette Institution.
               Avec nous vous vous avez la technologie au bout des doigts.
               </p>                           
            </div>
          </div>
          <div className="col-md-4">
            <img src="entreprise.png" background="#55595c" color="#eceeef"   text="Thumbnail" alt={titre} />
          </div>
        </div>
        <div className="row  service shadow-sm">
          <ul className="list-group-item-flush col-md-8">
           <h3>Le avantages d'un site web pour vous: </h3>
           <li className="list-group-item">
             <i className="badge badge-primary">1</i>
              Renvoyer une image professionnelle de vous et de votre activité. 
           </li>
           <li className="list-group-item">
             <i className="badge badge-primary">2</i>           
             Montrer votre expertise, vos qualités 
           </li>
           <li className="list-group-item">
             <i className="badge badge-primary">3</i>  
             Montrer que vous existez vraiment, être visible 
           </li>
           <li className="list-group-item">           
             <i className="badge badge-primary">4</i>   
             Montrer que vous êtes crédible, légitime 
           </li>
           <li className="list-group-item">
             <i className="badge badge-primary">5</i>   
             Montrer que vous êtes authentique et accessible 
           </li>
           <li className="list-group-item">
             <i className="badge badge-primary">6</i>   
             Augmenté votre chiffre d'affaire 
           </li>
          </ul>        
        </div>
      </div>
      );
}

export default CardClient;