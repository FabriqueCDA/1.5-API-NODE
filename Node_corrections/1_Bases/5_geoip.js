/*
 *   
 *  Appeler une API de GeoIp
 *  Afficher les information de votre connexion internet
 *  
 */

 // Charger le module de gestion du https
const https = require('https')

// Définit la requête d'appel à l'API
const options = {
  hostname: 'freegeoip.app',
  port: 443,
  path: '/json/',
  method: 'GET'
}

// Requête appelant l'API de taux de change
const req = https.request(options, res => {
  
  let resultat = []; 

  // Chargement asynchrone
  res.on('data', d => {
    resultat.push(d);
  })
  
  res.on('end',  () => {
    resultat = resultat.join();
    let r = JSON.parse(resultat);
    // Affichage du résultat
    console.log(`\n***** GEO IP *****\n\nIP:${r.ip}\n${r.zip_code} ${r.city}\n${r.region_name}\n${r.country_name}\n`);
  })

})
// Gestion des erreurs
req.on('error', error => {
  console.error("==> Erreur: ", error);
})

req.end();



