define([
		'underscore',
		'backbone',
		'marionette'
	],

	function( _, Backbone, Marionette ){
		'use strict';

		return Marionette.Controller.extend({
			initialize: function(options){
				this.List = new Backbone.Collection();
				this.Config = new Backbone.Model();

				this._setList(options.list, options.config);
				this._setConfig(options.config);
			},

			// "Initializes" the collection with the passed in config JSON blob
		    _setList: function(list, config){
		    	var self = this;

		    	_.each(list, function(entry){
		    		if(entry.url && entry.path && entry.callback && entry.path){ // Be strict about having all params	
	        			var baseURL = "";
	        			if(!_.isEmpty(config.baseURL)) baseURL = config.baseURL + "/";

	        			entry.url =  baseURL + entry.url;
	        			entry.path = config.basePath + "/" + entry.path;
	        			entry.route = config.baseRoute + "_" + entry.route;

	        			self.List.add(new Backbone.Model(entry), {merge: true}); // Local module dependency collection
	        		}
	        	});
		    },

		    getList: function(){
		    	return this.List;
		    },

		    _setConfig: function(config){
		    	var self = this;

		    	_.each(config, function(value, key){
		    		self.Config.set(key, value);
		    	});
		    },

		    getConfig: function(){
		    	return this.Config;
		    },

		    // Returns module paths for AMD loading
		    retrievePaths: function(){
	            var paths = [];

	            // Not strictly decoupled, but...
	            this.List.each(function(module){
	                paths.push(module.get('path'));
	            });

				return paths;
		    },

		    // Returns module routes
		    retrieveRoutes: function(){
		    	var routes = [];

		    	this.List.each(function(module){
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