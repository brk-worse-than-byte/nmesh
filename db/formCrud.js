//mongoDB config
//basic CRUD setup
//exported to app.js in the express config
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = (app) => {
	var db;
	//db connection to mongodb
	MongoClient.connect('mongodb://localhost:27017/contacts', (err, database) => {
		if (err) return console.log(err);
		db = database;
		app.listen(3000, () => {
			console.log("Mongo is on 3000");
		});
		console.log("Mongo's playing bongos - the database has started!");
	});
	//CRUD
	app.use(bodyParser.urlencoded({extended: true}));
	//POST & GET routes for contact form at /contact:
	app.post('/contact', (req, res) => {
		db.collection('contacts').save(req.body, (err, result) => {
			if (err) return console.log(err);
			console.log("Contact form submission saved to Mongo");
		});
		console.log(req.body);
		res.redirect('/contact-submitted');	
	});
	app.get('/contact-submitted', (req, res) => {
		db.collection('contacts').find().toArray((err, results) => {
			if (err) {
				return console.log(err);
			} 
			res.render('contact', {test: "test works."});
			console.log(results);
		});
	});
}