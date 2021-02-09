# Node, réalisation d'une application avancée
## Prérequis
Vous avez déjà fait l'exercice 1_Bases.  

> Les compétences métier travaillées dans ces exercices
> - Développer des composants d’accès aux données
> - Développer la partie Back-end d'une application Web

## Réalisation d'un base de données JSON NoSql
Vous devez réaliser une base de données à partir de fichiers JSON, sans utiliser d'outil comme MongoDb, CouchDb, DynamoDb...     
La demande du client est de pouvoir gérer des parties d'escape game avec un début et une fin qu'il déclenchera manuellement. Une partie est jouée par plusieurs équipes composées d'au moins un gamer.   

Le système ne gère qu'une partie d'escape game à la fois, le client n'ayant qu'une salle pour l'instant, mais il espère que votre réalisation de part sa fiabilité et le temps que cela lui fait gagner lui permettra d'en ouvrir d'autres rapidemment...   

Durant la partie il demande à pouvoir attribuer des points manuelle, lorqu'il le souhaite, à une équipe.    

A la fin de la partie un classement par score et équipe s'affichera pour désigner le vainqueur.     

Il demande si possible un diagramme UML avant de commencer le développement,   
pour être sûr d'avoir bien exprimé sa pensée, et que toutes les fonctionnalités dont il a besoin, seront présentes.   

## 0 - Votre mission !!!!
Vous devrez développer une API REST permettant de gérer le CRUD sur les données d'une partie (cf. ci-dessous). Elle aura les routes du CRUD sur les paramètres mis à votre disposition ci-après.  
ATTENTION !!!! Vous ne développez pas de front !!! Utilisez CURL pour communiquer avec l'API.
 
## 1 - JSON de démarrage
Nous avons besoin de stocker une partie, une equipe composée d'utilisateurs. Copiez celui-ci pour l'utiliser dans votre application.
  
Proposition d'un fichier d'exemple :
 
```
{
    "dateDebut": "21/01/2021",
    "heureDebut": "10:35:05",
    "heureFin": "11:35:05",
    "equipes": [
        {
            "equipeId": 1,
            "score": 200,
            "login": "test",
            "passe": "test",
            "joueurs": [
                {
                    "nom": "Billon",
                    "prenom": "Pierre"
                },
                {
                    "nom": "Taillou",
                    "prenom": "James"
                },
                {
                    "nom": "Briano",
                    "prenom": "Angela"
                }
            ]
        },
        {
            "equipeId": 2,
            "score": 28,
            "login": "test1",
            "passe": "test1",
            "joueurs": [
                {
                    "nom": "Bioucy",
                    "prenom": "Maud"
                },
                {
                    "nom": "Milano",
                    "prenom": "Anna"
                }
            ]
        }
    ]
}
```
Ce fichier sera lu et exploité ultérieurement. Il porte les informations de la partie qui se joue ou qui a été jouée en dernier. Ce fichier sera réécrit à chaque fois qu'une partie sera créée.
  
## 2 - Création d'une nouvelle partie
A la création, une nouvelle partie doit se composer au minimum de une date de début et une heure de fin.  
Pour qu'elle soit prise en compte, il faudra réécrire le fichier JSON stocké en y intégrant les données de la nouvelle partie.  
Votre serveur doit comprendre une route pour cette création. 

## 3 - Création et mise à jour des équipes
Idem que pour la création de la partie, les équipes doivent pouvoir être gérées dans le JSON à réception de données dans la bonne route.  
On peut éditer les équipes une par une ou toutes ensemble.

## 4 - Supprimer un utilisateur
Il ne manquait plus qu'elle. La suppression des données.

## 5 - Et après ?
Il voudrait que les équipes puissent s'identifier et soient informées en temps réel de leur score, et du temps restant. Pour mémoire, c'est l'animateur qui attribue des points aux équipes. Celles-ci reçoivent le score global en temps réel.  
Pouvez-vous lui développer une solution pour cette amélioration, il deviendrait ainsi un client fidèle.  

## 6 - C'est pas sécurisé !
Cryptez les mots de passe envoyé, sans les mains ni NPM.
