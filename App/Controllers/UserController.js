const User = require('../Models/User'); 
class HomeController {
 
    async index(req, res){                
        res.send({
            saludo : 'Hola Mundo'
        }); 
    }

    home(req, res){
        res.json({
            saludo : 'Hola Home'
        }); 
    }

    async save(req, res){
        try {

            const datos =  req.params;
            const user  = new User(datos);
            const result = await user.save();

            res.send(result);
            
        } catch (error) {
            res.send(error)   
        }
    }

    async get(req, res){

        try {
            const id = req.params.id;
            const result = await User.find({'_id': id});

            res.status(200).send(result);

        } catch (error) {
            console.log(`[error usuario controller] ${error}`);

            res.status(500).send({
                'error' : error
            })
        }
    }

    async update(){
        try {

        } catch (error) {
            
        }
    }

    async delete(req, res){
        try {
            const id = req.params.id;
            const result = await User.deleteOne({'_id' : id});

            res.status(200).send(result); 

        } catch (error) {
            console.log(`[error usuario controller] ${error}`);
            res.status(500).send({
                'error' : error
            })
        }
    }
}

module.exports = new HomeController;