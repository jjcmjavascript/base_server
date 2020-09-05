const UserController  = require('../Controllers/UserController.js');

module.exports = [ 
    {
        path : '/',
        method: 'get',
        callback: UserController.index
    },

    {
        path : '/user/save/:name/:year/:email',
        method: 'get',
        callback: UserController.save
    },

    {
        path : '/user/get/:id',
        method: 'get',
        callback: UserController.get
    },

    {
        path : '/user/delete/:id',
        method: 'get',
        callback: UserController.delete
    }
];
