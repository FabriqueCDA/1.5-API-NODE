# Websocket en action
## Intro & présentation
Le Websocket, technologie de l'espace extérieur, permet des communications entre les spaceternautes. Pour ce faire, il faut un communicateur (une page HTML avec du Javascript) et un serveur pour réceptionner et renvoyer les échanges textuels. Prévoyez donc de composer deux projets, un pour le 'front', l'autre pour le 'back'.  
  
![Roger, vous me recevez ?](images/startrek.jpg)  

Pour mémoire, vous pouvez vous reporter aux informations sur la bibliothèque la plus fonctionnelle (selon capt'aine Kirk) :  
- [côté serveur](https://socket.io/docs/server-api/)  
- [côté client](https://socket.io/docs/client-api/)

## Côté client
Vous avez la documentation. Il nous faudra :
- une page HTML avec un input, une section et un bouton,
- un fichier JS contenant le code de connexion et d'interaction avec le serveur (cf. la doc).  
Le fichier HTML doit permettre d'envoyer un message saisi dans l'INPUT et de réceptionner les messages transmis par des tiers.  
Le serveur sera une application node, il devra permettre de réceptionner les messages reçus des spacternautes et de les transmettre à tous les connectés.  
Il s'agit d'un chat, nous alignerons nos messages sur la gauche et ceux reçus sur la droite.  
Indiquez un message de bienvenue (comme sur Discord) lorsque quelqu'un se connecte.  
## Côté serveur
Créez un événement indiquant la connexion et la déconnexion d'un utilisateur et un autre pour les messages envoyés.  
Prévoyez une page par défaut au cas ou quelqu'un chercherait à accéder à l'adresse du serveur (cf. exercice 2_Bases_etendue).  