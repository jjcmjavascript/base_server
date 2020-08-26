const Server = require('./App/Server/Index');

class App {
    constructor(server){
        this.server = Server; 
    }

    init(){
        this.server.init();
    }
}

const app = new App(Server); 

app.init();
