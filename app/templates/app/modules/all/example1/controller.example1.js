define([
		'marionette',

		'./views/itemview.example1'
	],

	function( Marionette, ExampleView ){
		'use strict';

		return Marionette.Controller.extend({
			loadListeners: function(){
				var self = this;

	            App.vent.on('route:module:example1', function(){
	                self.loadView();
	            });
			},

			loadView: function(){
				App.contentRegion.show(new ExampleView());
			}
		});
	}
);