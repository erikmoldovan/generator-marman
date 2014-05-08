define([
		'marionette',

		'modules/shared/shared.controller'
	],

	function( Marionette, Controller ){
		'use strict';

		return Controller.extend({
			getRouterController: function(){
				return {
					// Default is optional for modules with sub-modules, in case you want to use an action not already defined
					/*default: function(){
						console.log('[ROUTE} Default fired');
					},*/

					load_module_example2_sub1: function(){
						App.vent.trigger('route:module:example2:sub1');
					},

					load_module_example2_sub2: function(){
						App.vent.trigger('route:module:example2:sub2');
					}
				}
			}
		});
	}
);