define([
		'marionette',

		'modules/shared/shared.controller',

		'./itemview.example1'
	],

	function( Marionette, Controller, ItemView ){
		'use strict';

		return Controller.extend({
			getRouterController: function(){
				return {
					// THIS IS REQUIRED FOR MODULES WITH NO SUB-MODULES
					default: function(){
						// Show content
						App.contentRegion.show(new ItemView());

						console.log('[ROUTE} Example1:Default fired');
					},
				}
			}
		});
	}
);