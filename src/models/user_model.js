'use strict'
var config_database = require('./config_database/connection');
var models=config_database.mongoose;
var Schema = models.Schema;

var val = require('./validation_model/validator.js');
var timestamps = require('mongoose-timestamp');
var UserShema = new Schema({
    name: {type: String,  required:[true,'Required'],  index: { unique: true }},
    user: {type: String,  required:[true,'Required'],  index: { unique: true }},
    password: {type: String,  required:[true,'Required'], unique:false},

   
});

UserShema.plugin(timestamps);
var User=models.model('User', UserShema);
User.schema.path('name').validate(val.validatorUndefined,
  'Required', 'required');

User.schema.path('user').validate(val.validatorUndefined,
    'Required', 'required');

User.schema.path('password').validate(val.validatorUndefined,
    'Required', 'required');
//Membership.schema.path('state').validate(val.validatorState, 'Out Of Context', 'context');
module.exports = User;
