var express = require('express'),
    path = require('path'),
    bodyParser=require('body-parser'),
    cookieParser=require('cookie-parser'),
    errorHandler = require('express-error-handler');

module.exports = function (app) {
                app.use(function staticsPlaceholder(req, res, next) {
                    return next();
                });
                app.set('port', process.env.PORT || 8000);
                app.use(bodyParser.json());
                app.use(bodyParser.urlencoded({ extended: false }));
                app.use(cookieParser());
                app.use(errorHandler());
};
