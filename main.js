const { db, server } = require('./App/Configs/Index');
(()=>{
    class App {
        constructor(server, db){
            this.server = server; 
            this.db = db;
        }
    
        init(){
            this.db.connect();
            this.server.init();
        }
    }
    
    const app = new App(server, db);
    app.init();
})();
