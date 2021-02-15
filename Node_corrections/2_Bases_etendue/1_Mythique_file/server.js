// On importe express dans notre application
// Node utilise require pour cette opération (comme les imports de la programmation en modules par exemple)
const express = require("express");
// On crée notre application express
const app = express();

app.use(express.static('mythique_files'));

// App.get permet de déterminer nos routes une à une
app.get('/', function (req, res) {
    res.sendFile('mythique.html', { root: __dirname })
});

app.listen(8080, () => {
    console.log('Serveur en écoute sur le port 8080');
});