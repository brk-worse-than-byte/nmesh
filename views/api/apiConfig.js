//basic api config
//exported to app.js in the express config
var express = require('express');
var router = express.Router();

module.exports = function (app) {
	//api listens @ port 8080
	var port = process.env.PORT || 8080;
	//handle GET requests to root URI
	router.get('/', function(req, res) {
		res.json({ message: "Connected to nMESH-API"});
	});
	//...and only handle them w/api route
	app.use('/api', router);
	//start API router
	app.listen(port);
	console.log("We've started the nMESH-API!");
	console.log("API Listening on port " + port);

	//API routes
	router.route('/contact-submissions')
		.get(function(req, res) {
			
		});
}

