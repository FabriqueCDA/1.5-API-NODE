/*
 *   
 *  Lecture d'un fichier Json
 *  Remplacement des caractères contenus dans data (0 -> " " et 1 -> "*" ou  "▓" "█" )
 *  Affichage ligne par ligne 
 * 
 */

// Etend la classe String avec une fonction de remplacement de caractères indiqués dans un objet
String.prototype.remplacerDepuisMotif = function(Objcaracteres) {
    // récupère la chaine de caractères concernée
    let retourChaine = this;
    // Remplacement de chaque caractères indiqué dans l'objet
    for (const caractere in Objcaracteres) {
      // Utilisation d'une expression régulière pour remplacer le caractères
      retourChaine = retourChaine.replace(new RegExp(caractere, 'g'), Objcaracteres[caractere]);
    }

    return retourChaine;
};


// Require permet aussi de charger directement un fichier JSON
const dessin = require('./resources/graph.json');

// Dessine le contenu du fichier
dessin.data.forEach(element => console.log( element.remplacerDepuisMotif({'0': ' ', '1': '█'}) ));

/*
// Autre
const taille = dessin.data.length;
for(i = 0; i < taille; i++){
  let str = dessin.data[i];
  console.log(str.allReplace({'0': ' ', '1': '█'}))
}
*/

