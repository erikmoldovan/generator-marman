/*	
 *  Shared module definition
 */

define(function(require){
	'use strict';

	var $ = require('jquery'),
		Marionette = require('marionette'),

		SharedRouter = require('modules/shared/shared.router');

	return Marionette.Module.extend({
		initialize: function(options){
			// Instantiate Module components
	        var baseConfig = new Backbone.Model( options.moduleConfig.base );
	        var modulesList = new Backbone.Collection( options.moduleConfig.modules );

	        this.Router = new SharedRouter({ baseConfig: baseConfig, modulesList: modulesList });
	        this.deferred = $.Deferred();

	        var paths = modulesList.map(function(model){
	            return model.get('load').path;
	        });

	        var self = this;
	        require(paths, function(){
	            console.log('[MODULE] ' + baseConfig.get('title') + ' loaded');

	            self.deferred.resolve();
	        });

	        this.deferred.promise();
		}
	});
});