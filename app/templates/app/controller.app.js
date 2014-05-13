/*
 * App Controller module definition
 */

define(function(require){
	'use strict';

	var Marionette = require('marionette'),
		Controller = require('modules/shared/shared.controller');

	return Controller.extend({
		getRouterController: function(){
			return {
				// Default is optional, in case you want to use an action not already defined
				/*default: function(){
					console.log('[ROUTE} Default fired');
				},*/

				load_module_example: function(){
					App.vent.trigger('route:module:example');
				}
			}
		}
	});
});