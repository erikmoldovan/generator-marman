define([
		'underscore',
		'backbone',
		'marionette'
	],

	function( _, Backbone, Marionette ){
		'use strict';

		return Marionette.Controller.extend({
			initialize: function(options){
				this._List = new Backbone.Collection();
				this._Config = new Backbone.Model();

				this._setList(options.list, options.config);
				this._setConfig(options.config);
			},

			// Populates the List Collection
		    _setList: function(list, config){
		    	var self = this;

		    	_.each(list, function(entry){
		    		if(entry.url && entry.path && entry.path){ // Be strict about having all params	
	        			var baseURL = "",
	        				basePath = "";

	        			if(!_.isEmpty(config.baseURL)) baseURL = config.baseURL + "/";

	        			entry.url =  baseURL + entry.url;
	        			entry.path = config.basePath + "/" + entry.path;
	        			entry.route = config.baseRoute + "_" + entry.route;
	        			entry.callback = function(){
	        				console.log("[ROUTE] " + entry.title);
	        				// console.log(entry);
	        			}

	        			self._List.add(new Backbone.Model(entry), {merge: true}); // Local module dependency collection
	        		}
	        	});
		    },

		    // Populates the Config Model
		    _setConfig: function(config){
		    	var self = this;

		    	_.each(config, function(value, key){
		    		self._Config.set(key, value);
		    	});
		    },

		    getList: function(){
		    	return this._List;
		    },

		    getConfig: function(){
		    	return this._Config;
		    },

		    // Returns module paths for AMD loading
		    retrievePaths: function(){
	            var paths = [];

	            this._List.each(function(module){
	                paths.push(module.get('path'));
	            });

				return paths;
		    },

		    // Returns module routes
		    retrieveRoutes: function(){
		    	var routes = [];

		    	this._List.each(function(module){
		    		routes.push({
		    			url: module.get('url'),
		    			route: module.get('route'),
		    			callback: module.get('callback'),
		    			default: module.get('default')
		    		})
		    	});

		    	return new Backbone.Collection(routes);
		    }
		});
	}
);