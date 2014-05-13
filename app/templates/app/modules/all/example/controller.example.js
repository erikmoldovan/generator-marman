define(function(require){
	'use strict';

	var Marionette = require('marionette'),
		Controller = require('modules/shared/shared.controller');

	return Controller.extend({
		getRouterController: function(){
			return {
				// Default is optional for modules with sub-modules, in case you want to use an action not already defined
				/*default: function(){
					console.log('[ROUTE} Default fired');
				},*/

				load_module_example_sub1: function(){
					App.vent.trigger('route:module:example:sub1');
				},

				load_module_example_sub2: function(){
					App.vent.trigger('route:module:example:sub2');
				}
			}
		}
	});
});