define([
		'underscore',
		'backbone'
	],

	function( _, Backbone ){
		'use strict';

		return Backbone.Model.extend({
		    initialize: function(options){
		        console.log(options);
		    }
		});
	}
);