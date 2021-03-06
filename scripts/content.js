// CONTAINS THE HTML OF EACH INFORMATION PART
const content = {
    one: `
    <article class="details one">
        <div class="details-content">
            <h1 class="actual-module">01</h1>
            <h2 class="actual-module-title">24 mars 2006 <br /> Falcon 1</h1>
            <p class="first-part">En 2006 a lieu le <span class="important-text">premier lancement de SpaceX</span>, Falcon 1. Le 24 mars, le premier vol a lieu, après 6 mois de retard. C’est <span class="important-text">un échec</span>, le moteur Merlin s’arrête prématurément, le lanceur est détruit après moins d’une minute de vol, atteignant seulement 1800 mètres d’altitudes.</p>
            <div class="video-archive"><iframe width="400" height="200" src="https://www.youtube.com/embed/0a_00nJ_Y88" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>
            <p>La <span class="important-text">vidéo du vol</span> montre la retombée du lanceur à 1km du pad dans une gigantesque boule de feu. Il n"y avait personne sur l"atoll pendant le lancement, mais de nombreuses caméras ont filmé l"explosion et la fumée qui a enveloppé le site. Le reste du lanceur a été récupéré après la barrière de corail. L"analyse montrera un <span class="important-text">défaut dans le moteur Merlin</span>. Pendant les semaines qui ont précédé le tir, le sel marin a corrodé un <span class="important-text">écrou en aluminium</span> dans le moteur. Juste avant l"allumage de dernier, quand les vannes ont été ouvertes, il a cassé et provoqué une fuite. A l"allumage, le carburant répandu à pris feu. <span class="important-text">34 secondes après le décollage</span>, les flammes ont traversé une ligne pneumatique et éteint le moteur.</p>
        </div>
    </article>
    <div class="annexes one">
        <h3><span>étapes</span> <br /> du falcon 1</h3>
        <div class="illustration"><img src="images/sketch.png" alt="sketch"></div>
    </div>`,
    two: `
    <article class="details two">
        <div class="details-content">
            <h1 class="actual-module">02</h1>
            <h2 class="actual-module-title">21 mars 2007 <br /> Falcon 1</h1>
            <p class="first-part">La <span class="important-text">deuxième tentative </span>pour le lanceur Falcon1, importante pour la <span class="important-text">crédibilité de l'entreprise</span>, a lieu le 21 mars sur l'île d'Omelek. <span class="important-text"> Nouvel échec</span>, le lanceur ne quitte même pas l'atmosphère.</p>
            <p>Le<span class="important-text"> moteur</span> du second étage<span class="important-text"> s'éteint prématurement</span> et la charge utile retombe sur Terre. SpaceX affiche un prix de <span class="important-text">5,9 millions $</span>. Des erreurs de programmation sur le second étage ont conduit à la perte de côntrole de ce dernier. En 2007, le prix est révisé à la hausse <span class="important-text">6,7 millions $</span>.</p>
            <div class="video-archive"><iframe width="100%" height="200px" src="https://www.youtube.com/embed/f9FVOKtRPAE" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>
        </div>
    </article>
    <div class="annexes two"> 
        <h3>ANNEXES</h3>
        <p><span class="important-text right-text">L'île d'Omelek</span> a longtemps servi de base de test et lancement de fusée pour les forces américaines. En 2006, SpaceX procède au tir inaugural de sa fusée orbital Falcon 1.</p>
        <div class="baseterrestre"><img src="images/baseterrestre.jpg" width="200px" alt="sketch"></div>
    </div>
    <p class="center-text">Le<span class="important-text"> moteur Merlin</span> à erglos liquides brûle de l'oxygène liquide et du RP-1 (une variante du kérosène) qui constitue le mélange le plus utilisé par les moteurs développés récemment.</p>`,
    three: `
    <article class="details two modified">
        <div class="details-content">
            <h1 class="actual-module">03</h1>
            <h2 class="actual-module-title">03 août 2008<br />Falcon 1</h1>
            <p>Dans la perspective d’un coup médiatique, le troisième vol du lanceur <span class="important-text">Falcon 1</span> devait emporter les cendres de la star de la série <span class="important-text">Star Trek, James Doohan</span>, dans l’espace.<br /><br />
            Cependant ce vol aussi est un échec puisque le <span class="important-text">second étage</span>, allumé au moment de la séparation avec le premier étage, détruisit la <span class="important-text">tuyère</span> du moteur dont la paroi est aussi mince qu'une canette de soda. La charge utile termine dans l’eau.  La compagnie frôle la mort avec ce troisième échec, mais elle est sauvée de peu par <span class="important-text">Peter Thiel</span> qui se trouve être le premier investisseur extérieur de SpaceX.</p>
                <div class="video-archive"><iframe width="400" height="200" src="https://www.youtube.com/embed/2eGiqqoYP5E" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>
        </div>
    </article>
    <div class="annexes two modified">
        <h3>ANNEXES</h3>
        <p><span class="important-text">Peter Thiel</span> est un ancien champion d’échecs aujourd’hui multi-milliardaire, <span class="important-text">fondateur de Paypal, membre du conseil d’administration de Facebook</span> et l’un des principaux investisseurs de SpaceX. </p>
        <div class="peter-thiel"><img src="images/peter-thiel.png" width="150px" alt="Peter Thiel"></div>
    </div>
    <p class="center-text">La <span class="important-text">tuyère</span> correspond à un conduit droit de taille variable situé à l’arrière d’un <span class="important-text">moteur thermique</span> permettant de transformer l’<span class="important-text">énergie thermique</span> en <span class="important-text">énergique cinétique</span>.</p>
    <div class="tuyere"><img src="images/tuyere.png" width="125px" alt="tuyère"></div>`,
    four: `
    <article class="details two modified">
    <div class="details-content">
        <h1 class="actual-module">04</h1>
        <h2 class="actual-module-title">14 juillet 2009<br />Falcon 1</h1>
        <p>Dans la perspective d’un coup médiatique, le troisième vol du lanceur <span class="important-text">Falcon 1</span> devait emporter les cendres de la star de la série <span class="important-text">Star Trek, James Doohan</span>, dans l’espace.<br /><br />
        Cependant ce vol aussi est un échec puisque le <span class="important-text">second étage</span>, allumé au moment de la séparation avec le premier étage, détruisit la <span class="important-text">tuyère</span> du moteur dont la paroi est aussi mince qu'une canette de soda. La charge utile termine dans l’eau.  La compagnie frôle la mort avec ce troisième échec, mais elle est sauvée de peu par <span class="important-text">Peter Thiel</span> qui se trouve être le premier investisseur extérieur de SpaceX.</p>
            <div class="video-archive"><iframe width="400" height="200" src="https://www.youtube.com/embed/WTFlFFrfEB0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>
    </div>
    </article>
    <div class="annexes two modified">
        <h3>Plan du lanceur falcon 1</h3>
        <p class="modified">Entre le Falcon 1 et le Falcon 9, un cap est passé : le prix se voit multiplié par dix atteignant la somme de 62 millions de dollars pour le Falcon 9.</p>
    </div>
    <div class="falcon1-plan"><img src="images/falcon1-plan.jpg" width="300px" alt="Plan du Falcon 1"></div>`,
    five: `
    <article class="details one">
        <div class="details-content">
            <h1 class="actual-module">05</h1>
            <h2 class="actual-module-title">04 juin 2010 <br /> Falcon 9</h1>
            <p class="first-part">L'objectif de SpaceX avec ce <span class="important-text">Falcon 9</span> est de fournir un lanceur permettant d'abaisser fortement le prix des mises en orbite grâce à des coûts de fabrication modérés et la <span class="important-text">récupération des différents étages</span>.<br /><br />
                    Le <span class="important-text">4 juin</span> a lieu le premier lancer test du Falcon 9, basé sur le Falcon 5. Il répond globalement aux exigences de performances attendues, le lanceur parvient même à arriver en <span class="important-text">orbite basse</span>, son objectif. C’est un défaut de parachute qui causera la destruction du lanceur et notamment le <span class="important-text">premier étage</span> censé être réutilisable ;
                    </p>
            <div class="video-archive"><iframe width="510" height="265" src="https://www.youtube.com/embed/nxSxgBKlYws" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>
        </div>
    </article>
    <div class="annexes one modified">
        <h3 class="modified"><span>plan du<br />falcon 9</span></h3>
        <div class="illustration components-falcon9"><img src="images/components-falcon9.png" alt="Composants du lanceur Falcon 9"></div>
    </div>`,
    six: `
    <article class="details two">
        <div class="details-content">
            <h1 class="actual-module">06</h1>
            <h2 class="actual-module-title">08 octobre 2012<br /> Falcon 9</h1>
            <p class="first-part">Le premier vol opérationnel pour le Falcon 9 a eu lieu le <span class="important-text">8 octobre 2012</span>. A son bord, <span class="important-text">905 kg de fret</span> à destination de la <span class="important-text">Station Spatiale Internationale (ISS)</span>.<br /><br />
            La mission se déroule sans accroc. Le vaisseau est détaché de la station et effectue un amerrissage dans l'<span class="important-text">Océan Pacifique</span> après sa rentrée atmosphérique. Les équipes de SpaceX et de la NASA parviennent à récupérer le vaisseau et son contenu sans aucun difficulté.</p>
            <div class="video-archive"><iframe width="100%" height="200px" src="https://www.youtube.com/embed/nxSxgBKlYws" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>
        </div>
    </article>
    <div class="annexes two"> 
        <h3>ANNEXES</h3>
        <p class="right-text">La plateforme <span class="important-text">Of Course I Still Love You</span> est un navire drone capable d’accueillir le 1er étage du lanceur Falcon 9 dans le but de le réutiliser. C’est la seconde barge de ce type, succédant à la barge <span class="important-text">Just read the instruction</span>, qui n’est aujourd’hui plus en service.</p>
        <div class="basemarine"><img src="images/basemarine.jpg" width="200px" height="125px" alt="sketch"></div>
    </div>`,
    seven: `
    <article class="details two">
        <div class="details-content">
            <h1 class="actual-module">07</h1>
            <h2 class="actual-module-title">28 juin 2015<br /> Falcon 9</h1>
            <p class="first-part">La mission <span class="important-text">CR-7</span> est lancée par un Falcon 9 surmonté d'une <span class="important-text">capsule Dragon</span> sans pilote destinée à ravitailler la Station Spatiale Internationale. Toutes les statistiques sont conformes jusqu’à ce qu’un <span class="important-text">nuage de vapeur</span> commence à se former à l'extérieur de l'engin.<br /><br />
            Quelques secondes plus tard, une perte de pression du <span class="important-text">réservoir d'hélium</span> survient, s’ensuit alors une explosion des réservoirs. Le logiciel n'étant pas programmé pour déployer le parachute de la capsule du Dragon après un échec du lancement, ce dernier s’écrase. L'enquête a montré qu’un support des réservoirs d'hélium aurait <span class="important-text">éclaté</span> sous la force de l’<span class="important-text">accélération</span>, menant à une <span class="important-text">fuite de gaz</span> et <span class="important-text">désintégration de la fusée</span>.</p>
            <div class="video-archive"><iframe width="100%" height="200px" src="https://www.youtube.com/embed/PuNymhcTtSQ" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>
        </div>
    </article>
    <div class="annexes two"> 
        <h3>ANNEXES</h3>
        <p class="right-text">La plateforme <span class="important-text">Of Course I Still Love You</span> est un navire drone capable d’accueillir le 1er étage du lanceur Falcon 9 dans le but de le réutiliser. C’est la seconde barge de ce type, succédant à la barge <span class="important-text">Just read the instruction</span>, qui n’est aujourd’hui plus en service.</p>
        <div class="baseterrestre"><img src="images/helium-tank.png" width="200px" alt="sketch"></div>
    </div>`,
    eight: `
    <article class="details eight">
        <div class="details-content">
            <h1 class="actual-module">08</h1>
            <h2 class="actual-module-title">22 décembre 2015 <br /> Falcon full thrust</h1>
            <p>Après plusieurs révisions, une nouvelle version nommée <span class="important-text">Falcon 9 Full Thrust</span> est produite. Avec des réservoirs “super cryogéniques” permettant un gain de densité important, <span class="important-text">les performances générales sont améliorées de l'ordre de 33%</span>. <br /><br />
            Le <span class="important-text">22 décembre 2015</span>, pour la première fois, nous assistons à la <span class="important-text">réussite</span> d’un retour d’un lanceur Falcon 9, avec la <span class="important-text">nouvelle technologie</span> du lanceur Full Thrust.</p>
            <h3>Réactions</h3>
            <p class="reaction">«Congratulations @SpaceX on your successful vertical landing of the first stage back on Earth!»</p>
            <p class="quoted">NASA</p>
            <p class="reaction">«There and back again!»</p>
            <p class="quoted">Elon Musk</p>
            <p class="reaction">«SpaceX rocket landing opens 'new door' to space travel»</p>
            <p class="quoted">AFP news agency</p>
        </div>
        <div class="video-archive"><iframe width="400" height="250" src="https://www.youtube.com/embed/ANv5UfZsvZQ" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>
    </article>`,
    nine: `
    <article class="details one modified">
        <div class="details-content">
            <h1 class="actual-module">09</h1>
            <h2 class="actual-module-title">21 janvier 2016 <br /> Falcon Full Thrust</h1>
            <p class="first-part">Le 21 janvier, la mission se déroule comme il se doit, jusqu’à l’atterrissage. Une jambe d'atterrissage n’a pas réussi à se déployer, provoquant la chute de la fusée entière. La fusée avait bien ciblé la barge flottante, la vitesse d’atterrissage était parfaite, mais une anomalie au niveau des jambes est survenue.</p>
            <div class="video-archive"><iframe width="400" height="200" src="https://www.youtube.com/embed/0a_00nJ_Y88" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>
            <p>En soi, la mission a été un succès. Sa charge utile - un satellite de surveillance nommé Jason-3 - a été déposée en orbite. De plus, SpaceX a et aura beaucoup d'autres occasions de peaufiner ce genre d’atterissage sur barge.</p>
        </div>
    </article>
    <div class="annexes two modified bis">
        <h3>progrès</h3>
        <p>Le <span class="important-text">8 avril</span> de cette même année, lors d’un <span class="important-text">nouvel essai</span>, nous assistons à la <span class="important-text">première fusée qui se pose sans dégât</span> sur une plateforme située dans l’Océan Atlantique. C’est un grand pas en avant.<br /><br/>
        De plus, la fusée a pu envoyé en orbite le <span class="important-text">vaisseau cargo spatial Dragon</span> pour le compte de la NASA, qui assure le <span class="important-text">ravitaillement de l’ISS</span> (station spatiale internationale).</p>
        <div class="dragon"><img src="images/dragon.jpg" width="300px" alt="Cargo dragon"></div>
        <p class="dragon-text">Vaisseau cargo SpaceX Dragon, ou Dragon, pouvant transporter une cargaison de 3310 kg au maximum.</p>
    </div>`,
    ten: `
    <article class="details one modified">
        <div class="details-content">
            <h1 class="actual-module">10</h1>
            <h2 class="actual-module-title">30 mars 2017 <br /> Falcon Full Thrust</h1>
            <p class="first-part">A l'occasion de la <span class="important-text">mission SES-10</span>, SpaceX <span class="important-text">réutilise</span> pour la première fois un <span class="important-text">premier étage</span> ayant précédemment servi à mettre en orbite le vaisseau Dragon lors de la mission CRS-849,50. Le premier étage est de nouveau récupéré sur la barge autonome “Of Course I Still Love You” située dans l’Atlantique.<br />
            Réutiliser un étage est une <span class="important-text">opération inédite</span> dans le domaine de l’aérospatial. Elon Musk avait assuré fin 2015 qu'il pourrait théoriquement être <span class="important-text">recyclé jusqu'à cent fois</span>, tout en estimant pouvoir le faire revoler de dix à vingt fois.<br /><br />      
            Nous entrons de ce fait dans une toute <span class="important-text">nouvelle ère</span>...</p>
            <h3>apports, essors, évolution...</h3>
            <p>Par le biais de ses <span class="important-text">multiples tentatives</span>, bien que marquées par des <span class="important-text">échecs assez fréquents</span>, la société SpaceX a démontré que <span class="important-text">les échecs sont la clé de la réussite</span>.</p>
        </div>
    </article>
    <div class="video-annexe"><iframe width="400" height="200" src="https://www.youtube.com/embed/qXzyrTQoNYs" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>`
}