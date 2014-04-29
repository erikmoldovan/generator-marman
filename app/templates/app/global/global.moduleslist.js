define([
		'underscore',
		'backbone',
	],

	function( _, Backbone ){
		'use strict';

		return Backbone.Collection.extend({
		    // Retrieves module routes (for module routers)
		    retrieveRoutes: function(){
		    	var routes = {},
		    		self = this;

		    	_.each(this.models, function(module){
			    	routes[module.get('url')] = module.get('route');
		    	});

		    	return routes;
		    }
		});
	}
);