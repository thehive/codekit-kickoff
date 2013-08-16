// Custom JS Application Code

// If using JSLint for syntax debugging, include the following two lines for looser management
/*jslint browser: true, sloppy: true, white: true*/
/*global $, console, alert, app*/

$(function() { 
	app.init();
});

var app = { 

	init: function() { 
		// Kick off the listeners
		this.listeners();		
		// Application has been initalized
		console.log(this.settings.name + "(v" + this.settings.version + ") Started");
	},
	
	listeners: function() {
		// Application Listeners can be loaded here for easy configuration
		console.log("Listening...");
	},
	
	settings: { 	
		name: "My Application",	
		url: "application_url.com",
		version: "1.0.0"
	}
	
};