define([
		'marionette',

		'./modules/shared/shared.controller'
	],

	function( Marionette, Controller ){
		'use strict';

		return Controller.extend({
			getRouterController: function(){
				return {
					default: function(){
						console.log('default woo');
					},

					load_module_example: function(){
						console.log('example woo')
					},

					load_module_example2: function(){
						console.log('example 2 woo')
					}
				}
			}
		});
	}
);