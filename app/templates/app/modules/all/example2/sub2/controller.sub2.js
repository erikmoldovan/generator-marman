define([
		'marionette',

		'./view/itemview.sub2'
	],

	function( Marionette, ExampleSubView ){
		'use strict';

		return Marionette.Controller.extend({
			loadListeners: function(){
				var self = this;

	            App.vent.on('route:module:example2:sub2', function(){
	                self.loadModule();
	            });
			},

			loadModule: function(){
				App.contentRegion.show(new ExampleSubView());
			}
		});
	}
);