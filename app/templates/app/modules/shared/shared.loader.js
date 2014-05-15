define(function(require){
	'use strict';

	var $ = require('jquery'),
		Marionette = require('marionette');

	return Marionette.Controller.extend({
		initialize: function(options){
			this._baseConfig = new Backbone.Model( options.moduleConfig.base );
            this._modulesList = new Backbone.Collection( options.moduleConfig.modules );
		},

		getPaths: function(){
			var paths = this._modulesList.map(function(model){
                return model.get('load').path;
            });

            return paths;
		},

		getBaseConfig: function(){
			return this._baseConfig;
		},

		getModulesList: function(){
			return this._modulesList;
		}
	})
});