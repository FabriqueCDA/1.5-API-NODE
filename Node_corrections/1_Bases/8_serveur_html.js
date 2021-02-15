// On importe http dans notre application
// Node utilise require pour cette opération (comme les imports de la programmation en modules par exemple)
const http = require('http');

// nous definissons l'adresse Ip de notre serveur (en local ici) et le port à utiliser
const hostname = '127.0.0.1';
const port = 3000;

// Nous créons le serveur qui renvoi une page en format Html (text/html)
const server = http.createServer((request, response) => {
  //response.statusCode = 200;
  //response.setHeader('Content-Type', 'text/html');
  // OR

  const body = '<!DOCTYPE html>\
                <html lang="fr">\
                <head>\
                  <title>Hello API</title>\
                </head>\
                <body>\
                  Hello <b>world</b>\
                </body>\
                </html>';
  response.writeHead(200, { 
    'Content-Length': Buffer.byteLength(body), // renvoyer la longueur en octets de la page
    'Content-Type': 'text/html'  // Type html
  }); 
 
  response.end(body); 

});

// Nous démarrons le serveur et affichons l'adresse et le port pour y accéder depuis un navigateur Web
server.listen(port, hostname, () => {
  console.log(`Serveur démarré sur http://${hostname}:${port}/`);
});
