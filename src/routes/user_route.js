//var mongojs = require('mongojs');
var UserController=require('../controllers/main_user_controller');

module.exports = function (app) {
    app.post('/user/save', UserController.save);
    app.get('/user/findAll', UserController.findAll);
    app.put('/user/update/:id', UserController.update);
   
};
