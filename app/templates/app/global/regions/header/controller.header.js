define([
		'marionette'
	],

	function( Marionette ){
		'use strict';

		return Marionette.Controller.extend({
			initialize: function(options){
				_.bindAll(this);
			}
		});
	}
);