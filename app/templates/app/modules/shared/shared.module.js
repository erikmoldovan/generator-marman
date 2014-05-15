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

	        this.Router = new SharedRouter({
	        	baseConfig: loader.baseConfig,
	        	modulesList: loader.modulesList
	        });

	        this.deferred = $.Deferred();

	        var self = this;

	        require(loader.getPaths(), function(){
	            console.log('[MODULE] ' + loader.baseConfig.get('title') + ' loaded');

	            self.deferred.resolve( loader.baseConfig.get('title') );
	        });
		}
	});
});