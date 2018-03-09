'use strict';
var userSubmission = require('../models/user-submission-model.js');


// 
// Get Data
exports.getSubmission = function(req, res){
	userSubmission.find({}).sort('-_id').exec(function(err, result){
		if(err){
			return res.status(400).send(err);
		}
		if(!result.length){
			return res.status(200).send({'data': 'No any Data'});	
		}
		return res.status(200).send(result);
	});
}

// 
// Post Data
exports.creteSubmission = function(req, res){
	if(!req.body.title || !req.body.body || !req.body.category){
		return res.status(400).send({'Invalid': 'Invalid Parameter'});
	}
    var postData = {
	    title: req.body.title,
		body: req.body.body,
		category: req.body.category,
		subjectUrl: req.body.subjectUrl
	}
	userSubmission.create(postData, function(err, result){
		if(err){
			return res.status(400).send(err);
		}
		return res.status(200).send(result);
	});
}

