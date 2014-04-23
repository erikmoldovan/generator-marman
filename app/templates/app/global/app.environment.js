define([
		'underscore',
		'backbone',
		'json!./global/config/config.environment.json'
	],

	function( _, Backbone, Environment ){
		'use strict';

		return Backbone.Model.extend({
			defaults: {
				'environment': 'prod'
			},

		    initialize: function(options){
		        if(!_.isUndefined(Environment)){
		        	this._loadProdEnvironment();
		        }
		    },

		    // Loads dev environment variables if file is present
		    _loadProdEnvironment: function(){
		    	var self = this;

		    	_.each(Environment, function(value, key){
		    		self.set(key, value);
		    	});
		    }
		});
	}
);