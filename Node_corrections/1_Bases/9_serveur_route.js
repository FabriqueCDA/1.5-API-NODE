// On importe http dans notre application
// Node utilise require pour cette opération (comme les imports de la programmation en modules par exemple)

const http = require('http');
const url = require('url')

// nous definissons l'adresse Ip de notre serveur (en local ici) et le port à utiliser
const hostname = '127.0.0.1';
const port = 3000;

function handler(req, res) {
    
  const parsedUrl =url.parse(req.url, true);
    // Racine du site
    if(parsedUrl.pathname === '/'){
        res.writeHead(200, {'Content-type':'text/plain'});
        res.write('Bienvenue sur ce serveur !');
        res.end();
    // Affichage de la date
    }else if (parsedUrl.pathname === '/date'){
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write(new Date().toString());
        return res.end();
    // Affichage 
    }else if(parsedUrl.pathname === '/hello'){
        // nom dans l'url
        const nom = parsedUrl.query.nom;
        
        if(!nom) {
            res.writeHead(400, {'Content-type': 'text/plain'});
            res.write("Erreur 400: mauvaise requête ");
            return res.end();
         } else {
            res.writeHead(200, {'Content-type':'text/plain'});
            res.write(`Hello ${nom}`);
            return res.end();
        }

    }else {
        res.writeHead(404, {'Content-type':'text/plain'});
        res.end();
    };}
  
// Création du serveur  
  const server = http.createServer(handler);

// Nous démarrons le serveur et affichons l'adresse et le port pour y accéder depuis un navigateur Web
server.listen(port, hostname, () => {
  console.log(`Serveur démarré sur http://${hostname}:${port}/`);
});
