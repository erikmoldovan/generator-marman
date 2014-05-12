define([
		'marionette',

		'./views/itemview.sub1'
	],

	function( Marionette, ExampleSubView ){
		'use strict';

		return Marionette.Controller.extend({
			initialize: function(){
	            App.vent.on('route:module:example:sub1', function(){
	                App.contentRegion.show(new ExampleSubView());
	            });
			}
		});
	}
);