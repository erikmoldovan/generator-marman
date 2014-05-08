define([
		'marionette',

		'./views/itemview.sub1'
	],

	function( Marionette, ExampleSubView ){
		'use strict';

		return Marionette.Controller.extend({
			loadListeners: function(){
				var self = this;

	            App.vent.on('route:module:example2:sub1', function(){
	                self.loadView();
	            });
			},

			loadView: function(){
				App.contentRegion.show(new ExampleSubView());
			}
		});
	}
);