const Express = require('express');
const Routes  = require('../Routes/Index.js')

class Server {
    constructor(Express, routes, port){
        this.server = Express();
        this.router = Express.Router();
        this.port = port;
        this.routes = routes;
    }

    init(){
        this.setMiddlewares([Express.json(), Express.urlencoded({ extended: true}) ]);
        this.setRoutes();
        this.server.listen(this.port)
    }

    setMiddlewares(middleware){
        if(Array.isArray(middleware)){
            middleware.forEach(item => this.server.use(item));
        }else{
            this.server.use(middleware);
        }
    }

    setRoutes(){
        this.routes.map( (item)=> this.router[item.method](item.path, item.callback))
        this.setMiddlewares(this.router);
    }

}

module.exports = (new Server(Express, Routes, 3000));
