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

		        this._loadModules(data.baseUrl, data.baseRoute, data.modules);

		        App.EventManager.trigger('global:modulemanager:loaded');
		    },

		    // Loads the default modules, which consists of the entire list of defined modules in the app
		    _loadModules: function(baseUrl, baseRoute, modules){
		    	var self = this;

		    	_.each(modules, function(module){
		    		module.url = baseUrl + "/" + module.url;
		    		module.route = baseRoute + "_" + module.path;

	        		self.add(new Backbone.Model(module));
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