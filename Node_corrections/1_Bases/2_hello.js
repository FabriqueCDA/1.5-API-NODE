/*
 *   
 *  Utilisation de process.argv
 *  pour récupérer un argument de la ligne de commande
 *  
 *  @param {string} arg[2] le prenom.
 * 
 */

// Récupération de l'argument prénom , 
// et suppression des 2 premiers éléments du tableaux renvoyées par défaut
let prenom = process.argv.slice(2)[0]; // ou     let [,,prenom] = process.argv;

// Gestion de l'absence d'argument, donc un prénom de type undefined 
if(prenom === undefined )prenom = "inconnu.e"

// Affichage du message dans la console
console.log(`Hello ${prenom} !` )

