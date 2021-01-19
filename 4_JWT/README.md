# JWT / JSON Web Token
> Compétence métier : sécuriser une application
What'is it de what is it this what is it ?  
## STOP !!! Avant d'aller plus loin, un peu de documentation 
Voici [quelques explications](https://jwt.io/introduction/) que vous n'allez pas aimer du tout mais qui donneront des informations de fond sur le processus et vous permettrons de comprendre comment ça marche.
## A votre disposition ?
Vous trouverez une application node simple dans le dossier app. Elle est constituée d'un serveur Node créé à partir de l'exercice 1_Bases et d'une page HTML avec un petit formulaire. CSS et JS sont fournis pour le front. Votre travail consistera à gérer le côté serveur pour tester les identifiants fournis et renvoyer un token généré en bon et dûe forme.
## On se lance ?
La réalisation de cet exercice va nécessiter plusieurs étapes. Trouvez des solutions pour chacune d'elles :    
1 - Vous allez transmettre des données, on peut en améliorer la réception et la gestion dans express avec body parser. Installez le module et enquêtez sur son utilisation.      
2 - Il existe différents modules JS pour générer et gérer des token. Pourquoi pas essayer 'jsonwebtoken' tout simplement ?    
3 - Lorsque vous aurez vos bibliothèques prêtes, il vous faudra considérer différentes dimensions parmis lesquelles : instantier chaque module, avoir une phrase de sécurité pour le web token, permettre l'accès au serveur depuis des adresses IP ou domaines différents (CORS).    
4 - Au niveau du front vous remarquerez la méthode setUpReponse(). Elle formate les données qui sont envoyées au serveur. Faites en sorte de récupérer ces données et de les traiter en JSON.    
5 - Dans le front toujours, les données reçues depuis le serveur s'appuient sur les status des entêtes de la requête renvoyée : 200, 401 ou autre. Ca induit que votre serveur doit renvoyer des status lors du traitement de l'identification. Pourriez-vous jeter un oeil à ça ?    
6 - Pour finir tout ça, vous risquez de vous heurter à un problème de Cross Domain (CORS). Vous trouverez plus d'infos sur cette questions par [ici](https://fr.wikipedia.org/wiki/Cross-origin_resource_sharing).    
7 - Bien entendu, il faut renvoyer un token si l'identification réussit (pas besoin de base de données ici, un code en dur suffira, c'est un exercice).    
8 - Cerise sur le gâteau. Ca serait bien de faire attention à des petits paramètres de sécurité avec express.
