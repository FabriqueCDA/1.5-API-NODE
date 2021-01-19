# Node, les bases d'une application
## Prérequis
Nous postulons que vous avez installé sur vos postes, une version 14 ou supérieure de NodeJS ainsi que NPM.  
## Au démarrage
### Quelques informations de base
Jetez un oeil à ce [site Internet](https://maxlab.fr/javascript/comprendre-et-maitriser-npm-introduction/) sans vous attarder sur l'installation.
### Lançons-nous  
Créez une application node. Placez-vous dans un dossier vide qui vous convient et saisissez dans le terminal  : `npm init`  
Renseignez les informations qui constitueront votre fichier de package en vous appuyant sur les informations du lien ci-dessus.  
Voilà, vous avez une application node. Elle ne fait rien, mais vous êtes contents, c'est hightech.  
## Créer un serveur et gérer des routes
### Quelques informations de base
Nous allons utilisez expressjs (quasiment un standard) pour faire comme avec PHP et Apache, renvoyer une page HTML dans le navigateur. Dit comme ça, ça parait limite mais dites vous que Apache ne fait rien d'autre que de renvoyer des pages Web...  
[Jetez un oeil ici pour votre information sur Express](https://fr.wikipedia.org/wiki/Express.js).  
### Créons notre serveur expressjs
On va installer le module express dans notre application : `npm install express --save`  
Express va être télécharger dans le dossier node_modules, l'option `--save` va inscrire le lien vers ces fichiers pour qu'il soient gérés par l'application (pensez à npm install qui parcoure le fichier pcackage.json pour télécharger les bibliothèques utiles).
Copiez le code présenté sur Wikipedia dans un fichier appelé server.js (le fichier par défaut identifié lors du npm init > package.json).  
Lancez le server avec la commande `node server.js` dans le terminal.  
Vous êtez près pour la suite. Votre serveur sera disponible sur la navigateur : localhost:3000  
## A vous de jouer
A partir de cette base :
- commencez par ajouter des routes pour afficher du contenu en utilisant la méthode `app.get()`.  
- ajoutez une route pour gérer les erreurs 404 toujours avec l''app.get()',  
- testez tout ça dans votre navigateur.  
  
    
Hop, hop, vous avez votre première application node faite à mano. Vous savez déjà renvoyer des informations en fonction des routes sélectionnées.  
Dans votre future carrière vous développerez de nombreuses applications pour faire de nombreuses choses qui n'auront pas forcément à voir avec un site Internet : chat, objets connectés, NFC... Ce genre de techniques vous sera certainement utile assez rapidement dans le cadre de ces développements.
