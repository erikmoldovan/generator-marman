define([
		'underscore',
		'backbone',
		'json!../modules/config.modules.json'
	],

	function( _, Backbone, ModuleLsist ){
		'use strict';

		return Backbone.Collection.extend({
		    initialize: function(options){
		        console.log('[GLOBAL] ModuleManager loaded');

		        // If no module list is explicitly pass in by the app, load the defaults
		        if(_.isUndefined(options)) this.loadDefaultModules();
		    },

		    // Loads the default modules, which is the entire list
		    loadDefaultModules: function(){
		    	var self = this;

		    	_.each(ModuleLsist, function(module){
	        		self.add(new Backbone.Model(module));
	        	});
		    },

		    returnModulePaths: function(){
	            var modulesArray = [];
	            var baseModulesURL = 'modules/all/'; /**** NEEDS TO BE ABSTRACTED INTO APP.MODULES ****/

	            _.each(this.models, function(module){
	                modulesArray.push(baseModulesURL + module.get('path'));
	            });

				return modulesArray;
		    }
		});
	}
);