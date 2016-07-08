'use strict';
// simple express server
const express = require('express');
const app = express();
const favicon = require('serve-favicon');
app.use(favicon(__dirname + 'favicon.ico'));
//routing
const router = express.Router();
//handlebars for view templates & rendering
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
//mongodb 
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db
//API
require('./api/apiConfig')(app);

MongoClient.connect('mongodb://localhost:27017/contacts', (err, database) => {
	if (err) return console.log(err);
	db = database;
	app.listen(3000, () => {
		console.log("Mongo is on 3000");
	});
	console.log("Mongo's playing bongos - the database has started!");
});

app.use(bodyParser.urlencoded({extended: true}));
//define HBs as the render engine
app.engine('handlebars', exphbs({defaultLayout: 'main.html'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home', {title: "nMESH"});
});
//about routes
app.get('/about', (req, res) => {
	res.render('about');
});
//projects routes
app.get('/projects', (req, res) => {
	res.render('projects', {});
});

app.get('/project-description', (req, res) => {

})

//contact form routes, post & get
app.get('/contact', (req, res) => {
	res.render('contact');
});
//contact form post requests
app.post('/contact', (req, res) => {
	db.collection('formsubmission').save(req.body, (err, result) => {
		if (err) return console.log(err);
		console.log("Contact form submission saved to Mongo");
	});
	console.log(req.body);
	res.redirect('/contact-submitted');	
});
//contact form redirect to results page
app.get('/contact-submitted', (req, res) => {
	db.collection('formsubmission').find().toArray((err, results) => {
		if (err) {
			return console.log(err);
		} 
		res.render('contact');
		console.log(results);
	});
});


app.listen(5000);
