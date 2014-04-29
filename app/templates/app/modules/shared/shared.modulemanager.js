define([
		'underscore',
		'backbone'
	],

	function( _, Backbone, GlobalModules ){
		'use strict';

		return Backbone.Collection.extend({
		    // Loads the default modules, which consists of the entire list of defined modules in the app
		    loadModules: function(config){
		    	var self = this;

		    	_.each(config.modules, function(module){
		    		module.path = config.basePath + "/" + module.path;
		    		module.route = config.baseRoute + "_" + module.path;

	        		self.add(new Backbone.Model(module), {merge: true});
	        	});
		    },

		    // Retrieves module paths
		    retrievePaths: function(){
	            var paths = [];

	            _.each(this.models, function(module){
	                paths.push(module.get('path'));
	            });

				return paths;
		    },

		    // Retrieves module routes
		    retrieveRoutes: function(){
		    	// var routes = {},
		    	// 	self = this;

		    	// _.each(this.models, function(module){
		    	// 	var baseUrl = module.get('baseUrl');

		    	// 	routes[baseUrl] = self.baseRoute + baseUrl;
		    	// });

		    	// // Define a default 'module' for the router
		    	// if(_.isUndefined(routes['*path'])) routes['*path'] = "default";

		    	// return routes;
		    }
		});
	}
);