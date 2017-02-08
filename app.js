var express = require('express'),
   
    path = require('path');

var app = express();
require('./config/environments')(app);
require('./src/routes/user_route')(app);
require('./src/routes/main_route')(app);
module.exports = app;
