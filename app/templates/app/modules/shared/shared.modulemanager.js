define([
		'underscore',
		'backbone',
		'json!./global/config/config.module.global.json'
	],

	function( _, Backbone, GlobalModules ){
		'use strict';

		return Backbone.Collection.extend({
		    initialize: function(options){
		    	// Loads default global modules list if no params are passed in
		        var data = (_.isUndefined(options)) ? GlobalModules : options;

		        this._loadModules(data.basePath, data.baseRoute, data.modules);

		        App.EventManager.trigger(data.eventTrigger);
		    },

		    // Loads the default modules, which consists of the entire list of defined modules in the app
		    _loadModules: function(basePath, baseRoute, modules){
		    	var self = this;

		    	_.each(modules, function(module){
		    		module.path = basePath + "/" + module.path;
		    		module.route = baseRoute + "_" + module.path;

		    		console.log(module);

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