// On importe http dans notre application
// Node utilise require pour cette opération (comme les imports de la programmation en modules par exemple)
const http = require('http');

// nous definissons l'adresse Ip de notre serveur (en local ici) et le port à utiliser
const hostname = '127.0.0.1';
const port = 3000;

// Nous créons le serveur HTTP qui retourne une page au format texte (text/plain)
// Nous définissons la fonction requestListener qui sera appelée à chaque requête faite aus serveur
const server = http.createServer((request, response) => {
  // https://developer.mozilla.org/fr/docs/Web/HTTP/Status
  // https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
  response.statusCode = 200;
    // https://nodejs.org/api/http.html#http_request_setheader_name_value
  // https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  response.setHeader('Content-Type', 'text/plain'); 

  response.end('Hello <b>mon bichon</b>');
});

// Nous démarrons le serveur et affichons l'adresse et le port à indiquer dans un navigateur Web
server.listen(port, hostname, () => {
  console.log(`Serveur démarré sur http://${hostname}:${port}/`);
});
