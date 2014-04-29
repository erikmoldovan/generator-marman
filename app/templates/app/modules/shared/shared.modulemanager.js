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
		    		module.route = config.baseRoute + "_" + module.url.replace('/', '_');

		    		var new_entry = new Backbone.Model(module);

	        		self.modulesCollection.add(new_entry, {merge: true}); // Local module dependency collection
	        		App.ModulesList.add(new_entry, {merge: true}); // Global module dependency collection
	        	});
		    },

		    // Retrieves module paths (for module loading via Require)
		    retrievePaths: function(){
	            var paths = [];

	            _.each(this.modulesCollection.models, function(module){
	                paths.push(module.get('path'));
	            });

				return paths;
		    }
		});
	}
);