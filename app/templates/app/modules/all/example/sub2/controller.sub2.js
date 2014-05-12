define([
		'marionette',

		'./views/itemview.sub2'
	],

	function( Marionette, ExampleSubView ){
		'use strict';

		return Marionette.Controller.extend({
			initialize: function(){
	            App.vent.on('route:module:example:sub2', function(){
	                App.contentRegion.show(new ExampleSubView());
	            });
			}
		});
	}
);