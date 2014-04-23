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
		    },

		    returnModulePaths: function(){
	            // Pulls in the list of modules dynamically from JSON, as filtered by permissions
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