define([
		'underscore',
		'backbone',
		'marionette'
	],

	function( _, Backbone, Marionette ){
		'use strict';

		return Marionette.Controller.extend({
			initialize: function(config){
				this._loadModules(config);
			},

			// "Initializes" the collection with the passed in config JSON blob
		    _loadModules: function(config){
		    	var self = this;
		    	this.modulesCollection = new Backbone.Collection();

		    	_.each(config.modules, function(module){
		    		module.path = config.basePath + "/" + module.path;
		    		module.route = config.baseRoute + "_" + module.url;

	        		self.modulesCollection.add(new Backbone.Model(module), {merge: true});
	        	});

	        	App.EventManager.trigger('global:modulemanager:loaded');
		    },

		    // Retrieves module paths (for module loading via Require)
		    retrievePaths: function(){
	            var paths = [];

	            _.each(this.modulesCollection.models, function(module){
	                paths.push(module.get('path'));
	            });

				return paths;
		    },

		    // Retrieves module routes (for module routers)
		    retrieveRoutes: function(){
		    	var routes = {},
		    		self = this;

		    	_.each(this.modulesCollection.models, function(module){
			    	routes[module.get('url')] = module.get('route');
		    	});

		    	// Define a default 'module' for the router
		    	if(_.isUndefined(routes['*path'])) routes['*path'] = "default";

		    	return routes;
		    }
		});
	}
);