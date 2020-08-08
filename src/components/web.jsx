import React from "react";

function  Web () {
  return (
      <div className="row web">        
          <p className="my-card row">
          <h1>Le developpement web</h1>
              Depuis l'invention d'internet jusqu'à l'heur ou vous liser cet article le web a fait du chemin,
              tout un ecoysteme c'est developper sur la toile entre, site vitrine, sites e-commerce ou d'infomation, jusqu'au applications web ou mobile.
              Oujoudhui on a de quoi passer toute sa journée sur le web sans s'ennuire toute en restant informer.  
          </p>
          <p className="row my-card">
            <h2> Les nouvelles technologies du web</h2>
            <p className="col-md-6">
               Les technologies du web permettent aujourd’hui de créer des applications informatiques qui n’auraient pas été possibles autrefois. 
               Des sites, et des applications web rapides, fluides et puissantes avec une ergonomie simple et efficace. 
               L'experience utilisateur dévient exeptionnel. Avec une telle technologie
               vous aurez plus de visibilité et plus  de productivité donc une augmentation sur votre chiffre d'affaire.
               Donner nous vos projets ayez confiance en nous, vous n'en sortrez que satisfait.. 
            </p>            
            <p className="col-md-6">
               <img src="/entreprise.png"  alt="entreprise"  />
            </p>
          </p>
          <p className="row my-card">
            <h2> Les nouvelles technologies du web</h2>
            <p >
               Les technologies du web permettent aujourd’hui de créer des applications informatiques qui n’auraient pas été possibles autrefois. 
               Des sites, et des applications web rapides, fluides et puissantes avec une ergonomie simple et efficace. 
               L'experience utilisateur dévient exeptionnel.               
              <ul className="col-md-8  list-group-flush listing">
                <li className="list-group-item">
                  <strong> Html/Css: </strong> <br/>
                  <small> 
                 Language de developpement des pages web static le html est ce que l'utilisateur vois dans le navigateuril parait facile mai pour il est reste l'architecture de 
                 la page web, quant au css qui est lui le designe la beauté ce qui donne du goux aux pages web.
                  </small>
                </li>              
                <li className="list-group-item"> <strong>Javascript</strong> <br/>
                  <small> 
                   Language de script web, le Js est devenue tres puissant avec le temps, en integrant des Frameworks. pouvant faire tres trucs exeptionnellment puissantes.
                   il est devnue le Language par exellence du web.
                  </small>
                </li>
                <li className="list-group-item"> <strong>Php</strong> <br/>
                    <small> Hypertext preprocessore le php est un Language cree a l'image de java pour rendre dinamique les pages web, afin d'etres mieux reatifs, il reste tres utiliser
                    jusqu'a present.
                  </small>
                </li>
                <li className="list-group-item"> <strong>Python</strong><br/>
                  <small> 
                   Language simple à l'image de pascal python est un Language de script en evolution et qui gagne de la force avec tres technologies d'intelligence artificiel.
                  </small>
                </li>
                <li className="list-group-item"> <strong>Ruby</strong><br/>
                 <small> 
                  Les Ruby est aimé par un grand nombre de developpeur avec sont framework ruby on rail mai il pert de la vitesse  
                  </small>
                </li>
               </ul>
                <p className="my-card">
                 <h2>Developpeur ou Webmaster</h2>
                 Au debut on à eu du male à definir le vrai difference des deux mai avec la naissance des technologies du web fontend les roles ces sont mieux dessiner
                le Developpeur est le concepteur du sites il est celui qui à des conaissances plus pousser dans les languages du web, le webmaster est un couto suisse il 
                est bon à tous il developpe des petits sites ger a production et le contenue quand site devient une application plus complexe il fait appel au specialiste 
                donc deeloppeur.

          </p>        
            </p>                       
          </p>
          
      </div>
    );
}
export default Web;