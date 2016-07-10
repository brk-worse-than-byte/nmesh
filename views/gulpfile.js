'use strict';

var gulp = require('gulp');
var gls = require('gulp-live-server');
var browserSync = require('browser-sync');
//compiling handlebars templates
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var path = require('path');
//minifying JS
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
//start express server & app
gulp.task('startExp', function() {
    var server = gls.new('app.js');
    server.start();
});

gulp.task('templates', function(){
  gulp.src('source/templates/*.hbs')
    .pipe(handlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('source/templates/layouts/js/'));
});

gulp.task('partials', function () {
	gulp.src(['source/templates/partials/_*.hbs'])
	  .pipe(handlebars({
	      handlebars: require('handlebars')
	    }))
	  .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
	    imports: {
	      processPartialName: function(fileName) {
	        // Strip the extension and the underscore 
	        // Escape the output with JSON.stringify 
	        return JSON.stringify(path.basename(fileName, '.js').substr(1));
	      }
	    }
	  }))
	  .pipe(concat('partials.js'))
	  .pipe(gulp.dest('source/templates/layouts/js/'));
});

//combine all the js and output updated main.html with minified js bundle.min.js tag
gulp.task('smash', function() {
	return gulp.src('source/templates/layouts/main.html')
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.js', gulp.dest('public')))
		.pipe(gulpif('*.html', gulp.dest('views/layouts')));
});

gulp.task('watch', ['browser-sync', 'templates', 'partials', 'smash'], function() {
	gulp.watch('source/templates/partials/_*.hbs', ['partials']);
	gulp.watch('source/templates/*.hbs', ['templates']);
	gulp.watch('source/templates/layouts/*.html', ['templates']);
	gulp.watch('source/templates/layouts/js/*.js', ['smash']);
});

//run everything
gulp.task('default', ['startExp', 'smash', 'browser-sync', 'watch'], function () {
});

gulp.task('browser-sync', function() {
	browserSync.init(null, {
		proxy: "http://localhost:5000",
        files: [
	        				"views/**/*.handlebars", 
	        				"views/*.handlebars",
	        				"public/js/*.js",
	        				"public/css/*.css"
      					],
        browser: "google chrome",
        notify: false,
        port: 7022,
	});
});
