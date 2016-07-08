var data = { superman: 'Dynamic Data is working!'};
var cardData = {
	cardTitle: "This is a Project",
	cardDescription: "This is the project description",
	links: [
		{link: "Google"},
		{link: "Bing"}
	]
}

var projectData = {
	cards: [
		{
				"cardTitle": "Project Awesome",
				"cardDescription": "This project was awesome!",
				"link": "Google",
				"img": "img/img1.jpg"
		},	
		{
			"cardTitle": "Project Fantastic",
			"cardDescription": "This project was fantastic!",
			"link": "Bing",
			"img": "img/img2.jpg"
		},
		{	
				"cardTitle": "Project Wonderful",
				"cardDescription": "This project was wonderful!",
				"link": "Yahoo",
				"img": "img/img3.jpg"
		
		}
	]
};

var homeTemplate = MyApp.templates.home(data);
var navTemplate = MyApp.templates.nav();
var aboutTemplate = MyApp.templates.about();
var contactTemplate = MyApp.templates.contact();
var projects = MyApp.templates.projects(projectData);

$(document).ready(function () {
	$('#home').html(homeTemplate);
	$('#navbar').html(navTemplate);
	$('#about').html(aboutTemplate);
	$('#contact').html(contactTemplate);
	$('#projects').html(projects);
});

