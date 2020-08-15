import React from "react";

function  Web () {
  return (
      <div className="row web">        
          <p className="my-card row">
          <h1>Le developpement web</h1>
              Depuis l'invention d'internet jusqu'à l'heur ou vous liser cet article, le web a fait du chemin,
              tout un ecoysteme c'est dévélopper sur la toile, entre site vitrine, sites e-commerce ou sites web dedié, jusqu'au applications web ou mobile.
              Oujoudhui on a de quoi passer toute sa journée sur le web sans s'ennuire toute en restant informer.  
          </p>
          <div className="row my-card">                        
            <p className="col-md-6">
            <h2>Les technologies du web</h2> 
              Les technologies du web sont un ensemble de technologies qui composent et utilisent le World Wide Web
             (généralement abrégé en Web) et ses normes.
              Les bases de ces technologies sont le protocole réseau HTTP (abr. de Hypertext
              Transfer Protocol), normalisé par l'IETF et le format de document HTML (abr. de Hypertext Markup
              Language), normalisé par le W3C.
            </p>
            <div className="col-md-6">
               <img src="/entreprise.png"  alt="entreprise"  />
            </div>                                    
          </div>
          <p className="row my-card">
              Destiné à sa création, à lier un document à un autre via une balise
              de texte renvoyant vers une autre page, selon le principe de l'hypertexte, le web est devenu l'un des protocoles
              d'échange les plus utilisés. Son évolution a été régulière depuis son lancement. Bénéficiant de son support sur
              le réseau internet devenu populaire, le web est, avec le courrier électronique, l'usage le plus
              courant d'Internet , et a été étendu bien au-delà de son usage initial. Ses URLs et URIs, destinées à identifier
              et localiser un document de manière unique et stable dans le temps, identifient aujourd'hui des applications
              avec des documents dynamiquement générés dans des langages de programmation dédiés, des applications
              informatiques complètes ou des concepts abstraits avec le web sémantique.
            </p>
            <p className="row my-card">
            Le format HTML permet aujourd'hui de nombreux types de documents à la page web elle-même, des images,
            du son et de la vidéo , des interfaces en 3D, de la visioconférence, des outils de conceptions de plus en plus
            complexes. Les technologies web permettent aujourd'hui de créer des applications informatiques qui n'auraient
            été possibles autrefois que dans des applications natives, avec le bonus d'être naturellement des applications
            réseau et donc permettant à la fois un travail collaboratif aisé et d'être accessible depuis n'importe quel point
            d'accès à Internet. On a ainsi pu voir émerger des plates-formes d'éditions de documents collaboratives comme
            les wikis. On trouve des navigateurs web sur tout type de terminal informatique, des serveurs sans interfaces
            graphiques avec des navigateurs simples comme W3m aux téléphones portables et tablettes. Le HTML5 est une autre avancée majeure [réf. nécessaire], il a l'avantage du web sémantique, ou tout peut être
            indexé par des automates et des contenus dynamiques multimédias ; WebGL pour la 3D, audio, vidéo,
            visioconférence, JSON pour les échanges de données et la recherche dynamique du client dans les bases de
            données du service.
            </p>
          <p className="row my-card">
            <h2> Les nouvelles technologies du web</h2>
            <p>
               Les technologies du web permettent aujourd’hui de créer des applications informatiques qui n’auraient pas été possibles autrefois. 
               Des sites, et des applications web rapides, fluides et puissantes avec une ergonomie simple et efficace. 
               L'expérience utilisateur dévient exceptionnel.               
              <ul className="col-md-10  list-group-flush listing">
                <li className="list-group-item">
                  <strong> Html /Xhtml /Html5 /Css /Css3: </strong> <br/>
                  <small> 
                 Language de developpement des pages web static le html et ses variantes sont ce que l'utilisateur vois dans le navigateuril parait facile mai pour il est reste l'architecture de 
                 la page web,  quant au css qui est lui le designe la beauté ce qui donne du goux aux pages web, avec sont css3 il à atteind un niveau formidable.
                  </small>
                </li>              
                <li className="list-group-item"> <strong>Javascript(ou ECMAScritp)</strong> <br/>
                  <small> 
                   Language d'extension du navigateur pour gerer de maniere asychrone et evenementiel certaine taches sur la machine du client,
                   le Js est devenue tres puissant avec le temps, Avec l'introduction de Ajax pour l'asychrone , la biblioteque jQuery pour le Dom.
                   Voire même etendue pour tourner sur le serveur avec Node.js, le javascript peut faire maintenant tres trucs puissantes.
                   il est devnue le Language par exellence du web.
                  </small>
                </li>
                <li className="list-group-item"> <strong>Php</strong> <br/>
                    <small> Hypertext preprocessore le php est un Language cree a l'image de java pour rendre dynamique les pages web.
                      PHP est rapidement devenu le langage le plus utilisé du côté serveur pour atteindre plus de 60 % en 2009.
                     il reste tres utiliser jusqu'a present avec des framework comme laravel, synfony..
                    </small>
                </li>
                <li className="list-group-item"> <strong>Java</strong><br/>
                  <small>
                    Java est un langage de programmation sorti en 1996. Les programmes écrits dans ce langage peuvent être soit
                    exécutés sur le serveur, soit - les applets Java - peuvent être téléchargés et exécutés par les navigateurs web.
                    Cette caractéristique a rendu cette technologie populaire pour réaliser des applications interactives et des jeux
                    vidéo sur le web . La technologie Adobe Flash, lancée la même année, a rapidement écrasé Java et est
                    devenu la technologie la plus populaire jusqu'aux années 2010.
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
                <p>
                 <h3>Les serveurs web</h3>
                  Aujourd'hui Apache et nginx, les deux principaux serveurs web utilisés sur le marché, permettent de servir
                  principalement des pages en PHP, servis via FastCGI, mais aussi en Java, via JSP ou encore Ruby, via Ruby
                  on Rails, ainsi qu'un grand nombre d'autres langages utilisés plus marginalement.
                 <h3>Les Bases de données </h3>
                  Les bases de données ont été rapidement utilisées dans les technologies web, afin de rendre les pages plus
                  dynamiques et de séparer la présentation du contenu. La plus populaire, généralement associée à PHP et
                  apache, dans ce que l'on appelle communément dans le jargon du web LAMP (pour Linux Apache MySQL
                  PHP). Dans le cas d'IIS et des ASP, la base de données est plus souvent celle de Microsoft, mSQL. D'autres
                  bases de données comme PostgreSQL, sont également utilisées majoritairement avec PHP
                  Depuis le début des années 2010, les bases de données de type NoSQL prennent de plus en plus d'importance
                  dans les services HTTP à très forte audience. MongoDB est la base de type NoSQL la plus utilisée.
                  <h3> Sur le client </h3>
                  Les clients sont principalement les navigateurs web qui permettent de présenter les documents et applications
                  web à l'utilisateur. Il existe de nombreux navigateurs, dont les plus utilisés sont Mozilla firefox, Google
                  Chrome, Internet Explorer ou encore Opera. Ces navigateurs implémentent tout ou parties de normes définies
                  principalement par le W3C : Html, css, DOM, javascript(example: jQuery, Ajax etc..), greffons(example: adobe flash player, Acrobat Reader etc..) .
                </p>
                <ul>
                <h3> Les references </h3>
                  <li> La page officiel du serveur CERN <a href="httpd://www.w3.org">httpd://www.w3.org</a></li>
                  <li> Le web sous licence <a href="httpd://home.cern.fr"> httpd://home.cern.fr</a> </li>
                  <li> Ou voire wikipedia <a href="httpd://www.wikipedia.com">httpd://www.wikipedia.com</a></li>
                </ul>       
            </p>                       
          </p>
          
      </div>
    );
}
export default Web;