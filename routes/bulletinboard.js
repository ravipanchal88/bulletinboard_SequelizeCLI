var express = require('express');
var router = express.Router();


//var Message = require('../models/bulletinboard');

var models = require('../models/index');
var Message = models.message;

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('bulletinboard/index');
});

router.get('/show', function(request, response) {
	Message.findAll().then(function(messages) {
		response.render('bulletinboard/show', {
			messages: messages
		});
	});
});


router.post('/', function(request, response) {
	console.log(Message);
	Message.create({
		title: request.body.title,
		body:  request.body.body
	}).then(function(messages) {
		response.redirect('bulletinboard/show');

	});
});

module.exports = router;