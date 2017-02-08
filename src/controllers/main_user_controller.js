'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');

/**
 * Extend user's controller
 */
module.exports = _.extend(
	require('./user_controllers/user_create_controller')
	,require('./user_controllers/user_find_controller')
	,require('./user_controllers/user_update_controller')
	//,require('./Activity/activity.remove.server.controller')
	//,require('./Activity/activity.update.server.controller')

);
