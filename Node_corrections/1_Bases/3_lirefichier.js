/*
 *   
 *  Lecture et affichage d'un fichier texte
 * 
 */

// incluons la module de gestion de fichiers
const fs = require('fs');
// Définissons le nom de fichier
const nomfichier = './resources/data.fbn'

// Lecture du fichier
fs.readFile(nomfichier, 'utf8', function(erreur, data) {
    // Traitement d'erreurs: quitte le programme et affiche l'erreur
    if (erreur) throw erreur; 
    // Affiche le contenu du fichier
    console.log(data);
});

