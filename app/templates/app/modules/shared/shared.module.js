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
		initialize: function(options){
	        var loader = new SharedLoader({
	        	moduleConfig: options.moduleConfig
	        });

	        var baseConfig = loader.getBaseConfig();

	        this.Router = new SharedRouter({
	        	baseConfig: baseConfig,
	        	modulesList: loader.getModulesList()
	        });

	        this.deferred = $.Deferred();

	        var self = this;

	        require(loader.getPaths(), function(){
	            console.log('[MODULE] ' + baseConfig.get('title') + ' loaded');

	            self.deferred.resolve( baseConfig.get('title') );
	        });
		}
	});
});