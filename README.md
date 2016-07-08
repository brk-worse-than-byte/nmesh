# nmesh 

<img src="https://raw.githubusercontent.com/methodbox/nmesh/master/nmesh-small.png" width="300">

#Nodejs, MongoDB, Express, SocketIO &amp; Handlebars boilerplate

More to come on the readme. Here's the quick and dirty:

##Goals
Ultimately, the goal was to have a generator that isn't a generator - quick setup of an nodejs app with all my favorite parts: fast routing/middleware, nodejs, templating, CRUD and web sockets setup along with API ready to go and boilerplate for all of this.

Pre-compilation of Handlebars templates is already done for you via gulp tasks. Minification of JS files is also done, but you can easily expand this for SASS/SCSS. Doing this is outside the scope of this documentation.

##Getting Started
There are a few pre-requisites for __global install__ via npm. This assumes you have Nodejs & npm installed. If not, visit https://nodejs.org to get started. Minimum version 0.12.x. Prefered is current 4.4.5. 

**Has not been tested with Nodejs >4.4.5.**

+ MongoDB - https://docs.mongodb.com/manual/installation/ Hint: if you're on OS X just do the brew. 
**This is the only pre-req needed in both dev and production.**
	
+ BrowserSync - Auto-refresh the browser window when making changes. https://github.com/BrowserSync/browser-sync. 
```$npm install -g browser-sync```

+ Handlebars - This is for pre-compiling. You don't need this in production.
```$npm install -g handlebars```

Just download or clone and **once you have the pre-reqs installed** change into the directory where you downloaded nMESH and do ```$npm install```, after npm is finished, ```$gulp``` to get the app started. That's it.

##How to use this boilerplate
There are 3 primary and 2 secondary directories you will work with. The rest are for the generated code.

###Primary Directories
* Source - This is where you will spend most of your time. The primary layout is ```main.html``` - if you change this file name, it must be updated in ```app.js```, too. Templates/Partials created here are pre-compiled when you make a change to them. No need to restart the app.
* Public - static files and compiled JS (and CSS if you're precompiling SASS/SCSS) go in this directory. 
* All output ends up in the Views or Public directory. Only files in source or public should be directly modified.
* Root - 
 - app.js - Express config, routes and most require() settings are here. The app must be restarted for these changes to take effect
 - gulpfile.js - Just what it says - this is your task runner. App must be restarted when this is changed.

###Secondary Directories
* API - Just like it says, this is where the API boilerplate config resides. By default, anything you write to Mongo can be accessed via GET/POST already.
* DB - This is where the default contact form CRUD is handled and where database-specific configuration should go, like defining a schema. No schema is used by default. A suggestion is in the api_schema.js for using a schema for specific data that you want to be accessible via API. Just a suggestion, not a requirement.

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
