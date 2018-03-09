'use strict';

var users = require('../controllers/user-submission')

module.exports = function(app) {
	// --
	// User
	app.get('/api/post', users.getSubmission);
	app.post('/api/create/post', users.creteSubmission);
}