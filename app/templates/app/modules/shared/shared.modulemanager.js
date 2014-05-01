define([
		'underscore',
		'backbone',
		'marionette'
	],

	function( _, Backbone, Marionette ){
		'use strict';

		return Marionette.Controller.extend({
			initialize: function(config){
				this.ModuleList = new Backbone.Collection();

				this._loadModules(config);
			},

			// "Initializes" the collection with the passed in config JSON blob
		    _loadModules: function(config){
		    	var self = this;

		    	_.each(config, function(entry){
		    		var module = new Backbone.Model(entry);

	        		self.ModuleList.add(module, {merge: true}); // Local module dependency collection

		    		if(entry.url && entry.path && entry.callback){ // Be strict about having all params	
		        		App.ModuleList.add(module, {merge: true}); // Global module dependency collection
	        		}
	        	});
		    },

		    // Returns module paths for AMD loading
		    retrievePaths: function(){
	            var paths = [];

	            // Not strictly decoupled, but...
	            this.ModuleList.each(function(module){
	                paths.push(module.get('path'));
	            });

				return paths;
		    },

		    // Returns module routes
		    retrieveRoutes: function(){
		    	var routes = [],
		    		self = this;

		    	App.ModuleList.each(function(module){
		    		routes.push({
		    			url: module.get('url'),
		    			route: module.get('route'),
		    			callback: module.get('callback')
		    		})
		    	});

		    	return routes;
		    }
		});
	}
);