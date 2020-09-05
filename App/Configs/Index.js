//Librerias
const Express = require('express');
const mongoose = require('mongoose');

//App configs
const Routes  = require('../Routes/Index')
const DB = require('../Database/Index');
const Server = require('../Server/Index');

//Inicializacion de la DB
const db = new DB(mongoose);
//Inicializacion del servidor 
const server = new Server(Express, Routes, 3000);

module.exports = {
    db, 
    server
};