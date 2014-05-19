/*	
 *  Shared module definition
 */

define(function(require){
	'use strict';

	var $ = require('jquery'),
		Marionette = require('marionette'),

		SharedLoader = require('modules/shared/shared.loader'),
		SharedRouter = require('modules/shared/shared.router');

	return Marionette.Module.extend({
		initialize: function( options ){
			// Load module components
	        var loader = new SharedLoader({
	        	moduleConfig: options.moduleConfig
	        });

	        var baseConfig = loader.getBaseConfig();

	        this.Router = new SharedRouter({
	        	baseConfig: baseConfig,
	        	modulesList: loader.getModulesList()
	        });

	        // Set up the deferred object
	        this.deferred = $.Deferred();
	        var self = this;

	        require( loader.getPaths(), function(){
	            console.log('[MODULE] ' + baseConfig.get('title') + ' loaded');

	            // Resolve the deferred object when requireJS is done loading the sub modules
	            self.deferred.resolve( baseConfig.get('title') );
	        });
		}
	});
});