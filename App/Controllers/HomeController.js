class HomeController {
    
    index(req, res){
        res.send({
            saludo : 'Hola Mundo'
        }); 
    }

    home(req, res){
        res.json({
            saludo : 'Hola Home'
        }); 
    }
}

module.exports = new HomeController;