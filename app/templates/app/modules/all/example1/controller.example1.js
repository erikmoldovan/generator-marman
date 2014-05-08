define([
		'marionette',

		'./view/itemview.example1'
	],

	function( Marionette, ExampleView ){
		'use strict';

		return Marionette.Controller.extend({
			loadModule: function(){
				console.log('example1');
				App.contentRegion.show(new ExampleView());
			}
		});
	}
);