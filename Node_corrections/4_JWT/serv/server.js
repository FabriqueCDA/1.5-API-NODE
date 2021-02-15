// On importe express dans notre application
// Node utilise require pour cette opération (comme les imports de la programmation en modules par exemple)
const express = require("express");
// Un middleware qui permet de gérer la réception de données depuis un formulaire
const bodyParser = require('body-parser');
// Hop, hop, hop, on importe le gestionnaire de tokens il nous permettra d'en générer
const jwt = require('jsonwebtoken');
// On crée notre application express
const app = express();

// Définir comment les données reçues pourront être traitées
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Un minimum de sécurité
app.disable('x-powered-by');

// Paramètrage des CORS pour autoriser le requêtage de toute origine
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

const cleSecure = "CestGenialDEntrerSiEnDetailDansLaSecurite";
var tokens;
var profil;

// App.get permet de déterminer nos routes une à une
app.get('/', function (req, res) {
    res.send("<a href='https://www.youtube.com/watch?v=I5mlAZkibgw' target='_blank'>Résiste ! Prouve, que tu existes</a>")
});

app.get('/cris', function (req, res) {
    res.send("<a href='https://www.youtube.com/watch?v=dg6Boku_bQc' target='_blank'>Tous les cris les SOS</a>")
});
// Ici nous utilisons une wildcard * pour capter les routes qui ne sont pas encore définies et renvoyer une erreur 404
app.get('*', function (req, res) {
    res.status(404).send("Il n'y a rien ici mais <a href='<a href='https://www.youtube.com/watch?v=y_wlAn8L9_E' target='_blank'>je t'aime quand même tu sais</a>");
});

// Récupérer les données envoyées par le formulaire d'identification
app.post('/id', (req, res) => {
    profil = req.body;
    console.log('Got body for ID:', profil, profil.id);
    if(profil.id == "coucou" && profil.mdp == "petitpoussin"){
        res.send(jwt.sign({ id: profil.id, duree:Date.now()+3600 }, cleSecure));
    }else{
        console.log("Et non ma poule, tu t'es mal identifié");
        res.sendStatus(401);
    }
});

app.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
});