/*
 *   
 *  Appeler une API de conversion monétaire
 *  pour convertir des Euros en Dollars US
 *  
 *  @param {int} arg[2] le montant.
 * 
 */

 // Charger le module de gestion du https
const https = require('https')

// Définit la requête d'appel à l'API
const options = {
  hostname: 'api.exchangerate.host',
  port: 443,
  path: '/latest',
  method: 'GET'
}
// Récupération du montant à convertir passé en argument au démarrage de Node
let montant = process.argv[2];
if(!montant)montant = 1;


// Requête appelant l'API de taux de change
const req = https.request(options, res => {
    let resultat = []; 
  //console.log(`statusCode: ${res.statusCode}`)
  // Chargement asynchrone
  res.on('data', d => {
    //process.stdout.write(d)
    resultat.push(d);
  })
  
  res.on('end',  () => {
    resultat = resultat.join();
    //
    let r = JSON.parse(resultat);
    let tauxUSD =  r.rates.USD;
    let montantUSD = montant * tauxUSD;
    console.log(`\n***** Conversion EUROS en USD *****\n\n ${montant} EUR vaut ${ montantUSD.toFixed(2) } USD  \n`);
  })

})

req.on('error', error => {
  console.error("==> Erreur: ", error);
})

req.end();



