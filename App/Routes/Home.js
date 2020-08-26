const HomeController  = require('../Controllers/HomeController.js');

module.exports = [ 
    {
        path : '/',
        method: 'get',
        callback: HomeController.index
    },

    {
        path : '/home',
        method: 'get',
        callback: HomeController.home
    }
];
