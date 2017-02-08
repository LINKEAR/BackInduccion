//var mongojs = require('mongojs');
//var url = 'mongodb://localhost:27017/BackDnD';
//var formidable = require('formidable');
//var collections = ["membresia"];
//var db = mongojs(url, collections);
var fs = require('fs');



module.exports = function (app) {
   
    app.get('/', function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
       res.end('Hola mundo \n');
    });
    app.post('/hola', function (req, res, next) {
    	//var userRequest=req.toString();
    	// var user=JSON.parse(userRequest);
		console.log("todo:", req.body);
        //res.writeHead(200, {'Content-Type': 'text/plain'});
       //res.end('Hola Mundo con post \n'+JSON.parse(req.body.toString()));
       response.send(request.body);
    });
   
};