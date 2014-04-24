define([
		'underscore',
		'backbone',
		'json!./global/config/config.modules.json'
	],

	function( _, Backbone, ModuleLsist ){
		'use strict';

		return Backbone.Collection.extend({
			baseModulesURL: 'modules/all/',
			baseRoute: "load_module_",

		    initialize: function(options){
		        // If no module list is explicitly passed in by the app, load the defaults
		        if(_.isUndefined(options)) this._loadDefaultModules();

		        App.EventManager.trigger('global:modulemanager:loaded');
		    },

		    // Loads the default modules, which consists of the entire list of defined modules in the app
		    _loadDefaultModules: function(){
		    	var self = this;

		    	_.each(ModuleLsist, function(module){
	        		self.add(new Backbone.Model(module));
	        	});
		    },

		    // Retrieves module paths for App-level module loading
		    retrievePaths: function(){
	            var paths = [],
	            	self = this;

	            _.each(this.models, function(module){
	                paths.push(self.baseModulesURL + module.get('path'));
	            });

				return paths;
		    },

		    // Retrieves module routes for App-level router loading
		    retrieveRoutes: function(){
		    	var routes = {},
		    		self = this;

		    	_.each(this.models, function(module){
		    		var baseUrl = module.get('baseUrl');

		    		routes[baseUrl] = self.baseRoute + baseUrl;
		    	});

		    	// Define a default 'module' for the router
		    	if(_.isUndefined(routes['*path'])) routes['*path'] = "default";

		    	return routes;
		    }
		});
	}
);