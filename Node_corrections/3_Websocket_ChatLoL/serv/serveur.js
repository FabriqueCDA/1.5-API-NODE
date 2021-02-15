var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{
  console.log('Un utilisateur est connecté', socket.id);
  io.emit('connect', socket);

  // Réception d'un message envoyé par le client
  socket.on('messageEnvoye', (message)=>{
    console.log(message);
    io.emit('messageRecu', message);
  })
});

http.listen(2000, function(){
  console.log('listening on *:2000');
});