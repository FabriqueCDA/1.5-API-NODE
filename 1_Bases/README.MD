# Node, les bases
## Prérequis
Nous postulons que vous avez installé sur vos postes, une version 14 ou supérieure de NodeJS ainsi que NPM.     
Pour vérifier la version de Node dans un terminal taper `node -v` ou `node --version`

## Au démarrage
### Quelques informations de base
Node Js est un [environnement d'exécution](https://fr.wikipedia.org/wiki/Environnement_d%27ex%C3%A9cution) ou runtime JavaScript multiplateforme exécutant le code javascript côté serveur, et de plus open source :)    
Code source disponible ici : https://github.com/nodejs/node/tree/master/lib
## Console REPL invité de commande interactive
Elle permet de tester du code sans avoir besoin de créer un fichier.     
Pour la lancer, taper dans votre terminal `node` et valider.       
`.help` vous indique les quelques commandes possibles.    
un test rapide
```
.editor
```
puis
```
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
```
Indiquez que vous avez terminé en apuyant sur CTRL+D, et le programme s'exécute.    

Pour quitter la console taper `.exit`

## Debug dans Chrome
Pour déboguer un programme de Node vous pouvez utiliser un outil intégré dans Chrome.     
Ajouter juste après `node` l'option `--inspect` ou pour démarrer le programme en pause `--inspect-brk`

Par exemple:
`node --inspect-brk monprogramme.js`    
Retourne:      
`Debugger listening on ws://127.0.0.1:9229/35736019-defb-4b2b-a845-233e5b8f9167`    
donc l'adresse de l'écouteur est dans mon cas `127.0.0.1:9229`    

Il faut indiquer comme url dans chrome: `chrome://inspect/`    
Cliquer sur `configure` et indiquer l'adresse de l'écouteur `127.0.0.1:9229` puis valider.     

Dernier pas, cliquer sur `Open dedicated DevTools for Node`        
Le débogueur est lancé et affiche le code source en ayant mis le programme en mode pause.        
Vous pouvez-placer des points d'arrêt, surveiller des variables, ... je vous laisse fouiller.  
 


## 1. Utilisation des modules (Core) directement intégrés à Node

L'ensemble des modules natifs composent l'[API](https://nodejs.org/api/) Node.     
Nous n'utiliserons pas de modules externe pour cette partie donc pas besoin de `npm`pour l'instant.     
### Lançons-nous  

#### 1.1 Hello en mode console (CLI Command-Line Interface)
Créer le plus basique des programme Node, le fameux `Hello le monde`, il devra une fois exécuté afficher `Hello le monde` sur le terminal.    
Placez-vous dans un dossier vide qui vous convient, créer un nouveau fichier `1_hello.js`, ajouter juste un ligne de code en utilisant `console.log` pour afficher `Hello le monde`.    
Exécuter ce fabuleux programme en utilisant la commande `node 1_hello.js`.
    
Bravo ! vous avez écrit votre premier programme avec Node.    

#### 1.2 Passage de paramètres
Notre programme doit maintenant afficher `Hello` suivi d'un prénom passé en paramètres au lancement de Node.          
Pour vous aider un peu jeter un coup d'oeil à [process.argv](https://nodejs.org/fr/knowledge/command-line/how-to-parse-command-line-arguments/)    
Gérer une absence de prénom en retournant `Hello inconnu.e`   

Exemple:`node 1_hello.js Jean` affichera `Hello Jean`


#### 1.3 Lire et afficher le contenu d'un fichier
Dans le dossier resources ce trouve un fichier texte utf-8 [`data.fbn`](resources/data.fbn) vous devez afficher son contenu dans le terminal.     
Toujours pas besoin de paquet externe utilisez juste le module `fs`.      


#### 1.4 Ascii art en noir et blanc
Un animal se cache dans le fichier [`graph.json`](resources/graph.json) du dossier ressources,
il contient le format du fichier, la largeur et la hauteur de l'image, et l'image dans un tableau `data` sous forme de `0` et de `1`.  
Nous avons besoin de votre aide pour découvrir ce qu'il est.     
Il faut lire le contenu de `data`, chaque donnée du tableau correspond à une ligne de l'animal à afficher,    
puis remplacer les `0` par le caractère espace " "  et les `1` par une étoile "*".

Exemple:
Un tableau représentant le signe plus: `["00100","11111","00100"]`       
Remplaçons les caractères `0` par des espaces " "      
`["  1  ","11111","  1  "]`     
Maintenant les `1` par des étoiles "*"     
`["  *  ","*****","  *  "]`     
Affichons le contenu du tableau ligne par ligne    
```
   *  
 *****
   *  
 ```
Super, nous avons dessiné un plus en mode caratère.

Maintenant créez le programme node pour afficher l'animal, chrono démarré !

Vous pouvez utiliser d'autres caractères à la place de l'étoile "*", comme ▓ ou █ ou autres, à vous de choisir.


#### 1.5 Informations de géolocalisation de votre adresse Ip internet
Affichez les informations que donne votre adresse IP :)    
En partant de l'exercice précedent, mais cette fois sans passage de paramètre,       
appelez cette api de géolocalisation https://freegeoip.app/json/     
traitez le fichier JSON retourné et affichez avec `console.log` :    
IP:`<ip>`   
`<code postal> <ville>`    
`<region>`   
<pays>   


#### 1.6 Conversion Euros en Dollars
Vous allez écrire un programme de conversion EUR/USD en appelant une API de taux de change:    
https://api.exchangerate.host/latest vous devez traiter le fichiers JSON renvoyé.       
Par défaut le programme retourne la conversion pour 1 euro, mais il est aussi possible de passer en paramètre   
un montant en euros à convertir depuis la ligne de commande. 
   
Vous devez inclure le module `https` de node en utilisant `require`, des informations pour faire une requête GET [ici](https://nodejs.org/api/https.html#https_https_get_url_options_callback) 
         
Pour le traitement du fichier Node a une classe JSON, et même `JSON.parse`, bon code !




#### 1.7 Création d'un serveur web
Il est temps maintenant de créer un serveur web, c'est simple et c'est le premier exemple    
de code en Node [ici](https://nodejs.org/fr/about/)     

Puis modifier ce programme et mettre en gras `World` de `Hello World` avec une balise HTML.        
N'oubliez pas de modifier le `header`.    


#### 1.8 Affichez une page HTML avec votre serveur

En partant du programme précédent ajouter dans le code les balises nécessaires pour avoir une page HTML conforme (head, title, body...)    
en affichant simplement le Hello World.


#### 1.9 Gérez les routes avec votre serveur

Maintenant ajouter la gestion des routes en utilisant seulement les modules `http` et `url` de Node.  

Implémenter 3 routes par exemple:    
`/` affiche une page Html Bienvenue    
`/date` affiche la date et l'heure du serveur    
`/hello?nom=Jean` affiche Hello Jean   


#### 1.10 Créer un mini API

#### 1.11 Créer un module Node






