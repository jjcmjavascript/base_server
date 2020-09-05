class DB {
    constructor(mongoose){
        this.mongoose = mongoose;
    }

    async connect(uri, config){
        uri = uri || "mongodb+srv://jgintoki:1ttBES4wd2bkVDaJ@cluster0.9rlip.mongodb.net/test_node?retryWrites=true&w=majority";
        config = config || { useNewUrlParser: true, useUnifiedTopology: true };

        const db  = await this.mongoose.connect(uri, config); 
        db.Promise = global.Promise; 

        return db;
    } 
}

module.exports = DB;
