class ChatLog{
    constructor(el, a){
        this.el = el;
        this.creerInterface();

        /**
         * 
         */
        this.adr = a;
        this.gestionChat();
        
    }

    gestionChat(){
        this.io = io.connect(this.adr, {transports: ['websocket', 'polling']});
        // La connexion s'établie
        this.io.on('connection', (socket) => {
            console.log(socket, socket.id);
        });
        // Le serveur nous informe que nous sommes connectés
        this.io.on('connect', ()=>{
            this.id = this.io.id;
            console.log(this.io.id);
        });
        // Le serveur a reçu et rerooté un message
        this.io.on('messageRecu', (obj)=>{
            console.log('Message reçu du serveur', obj['msg'], obj['id']);
            let p = document.createElement('p');
            p.textContent = obj['msg'];
            if(obj['id']== this.id){
                p.className = 'cestmoi';
            }
            this.chat.appendChild(p);
        });

        // Nous sommes déconnectés
        this.io.on('disconnect', ()=>{
            this.io.open();
        })

    }


    creerInterface(){
        console.log("création lancée");
        this.chat = document.createElement('article');
        this.infos = document.createElement('article');

        this.txt = document.createElement('input');
        this.txt.name = 'texte';

        this.btn = document.createElement('button');
        this.btn.textContent = "GO, GO, GO !!!";
        this.btn.addEventListener('click', (ev) => {
            // console.log(this.txt.value);
            if(this.txt.value.length > 3){
                this.io.emit('messageEnvoye', {id:this.id, msg:this.txt.value});
            }
        });


        this.el.appendChild(this.chat);
        this.el.appendChild(this.txt);
        this.el.appendChild(this.btn);
        this.el.appendChild(this.infos);
    }
}

let monPetitChat = new ChatLog(document.querySelector('section'), 'http://localhost:2000');