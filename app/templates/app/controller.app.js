define([
		'marionette',

		'./modules/shared/shared.controller'
	],

	function( Marionette, Controller ){
		'use strict';

		return Controller.extend({
			getRouterController: function(){
				return {
					// Default is optional, in case you want to use an action not already defined
					/*default: function(){
						console.log('[ROUTE} Default fired');
					},*/

					load_module_example1: function(){
						console.log('[ROUTE] Example1 fired')
					},

					load_module_example2: function(){
						console.log('[ROUTE] Example2 fired')
					}
				}
			}
		});
	}
);