'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSubmissionSchema = new Schema({
    title: String,
    body: String,
	category: String,
	subjectUrl: String
});

module.exports = mongoose.model('userSubmission', userSubmissionSchema);