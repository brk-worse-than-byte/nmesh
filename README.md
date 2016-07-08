# nmesh 

<img src="https://raw.githubusercontent.com/methodbox/nmesh/master/nmesh-small.png" width="300">
Nodejs, MongoDB, Express, SocketIO &amp; Handlebars boilerplate

More to come on the readme. Here's the quick and dirty:

##Goals
Ultimately, the goal was to have a generator that isn't a generator - quick setup of an nodejs app with all my favorite parts: fast routing/middleware, nodejs, templating, CRUD and web sockets setup along with API ready to go and boilerplate for all of this.

##Getting Started
There are a few pre-requisites for **global install** via npm. This assumes you have Nodejs & npm installed. If not, visit https://nodejs.org to get started. Minimum version 0.12.x; Prefered is current 4.4.5. **Has not been tested with Nodejs >4.4.5.**

	<li>MongoDB - https://docs.mongodb.com/manual/installation/ Hint: if you're on OS X just do the brew. **This is the only pre-req needed in both dev and production.**</li>
	<li>BrowserSync - Auto-refresh the browser window when making changes
	https://github.com/BrowserSync/browser-sync.</li> ```$npm install -g browser-sync```
	<li>Handlebars - This is for pre-compiling. You don't need this in production. ```$npm install -g handlebars```</li>


```
File/Folder Tree:
├── api
│   └── apiConfig.js
├── app.js
├── db
│   ├── api_schema.js
│   └── formCrud.js
├── gulpfile.js
├── package.json
├── public
│   ├── css
│   │   └── styles.css
│   ├── favicon.ico
│   ├── img
│   │   ├── img1.jpg
│   │   ├── img2.jpg
│   │   ├── img3.jpg
│   │   ├── img4.jpg
│   │   ├── img5.jpg
│   │   ├── img6.jpg
│   │   └── img7.jpg
│   └── js
│       └── bundle.min.js
├── source
│   └── templates
│       ├── about.hbs
│       ├── contact.hbs
│       ├── home.hbs
│       ├── layouts
│       │   ├── js
│       │   │   ├── mobile_nav.js
│       │   │   ├── partials.js
│       │   │   ├── render.js
│       │   │   └── templates.js
│       │   └── main.html
│       ├── nav.hbs
│       ├── partials
│       │   └── _exampleForm.hbs
│       └── projects.hbs
└── views
    ├── about.handlebars
    ├── contact.handlebars
    ├── home.handlebars
    ├── layouts
    │   ├── css
    │   │   └── styles.css
    │   ├── js
    │   └── main.html
    ├── partials
    └── projects.handlebars
  ```
