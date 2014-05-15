define(function(require){
	'use strict';

	var $ = require('jquery'),
		Marionette = require('marionette');

	return Marionette.Controller.extend({
		initialize: function(options){
			this.baseConfig = new Backbone.Model( options.moduleConfig.base );
            this.modulesList = new Backbone.Collection( options.moduleConfig.modules );
		},

		getPaths: function(){
			var paths = this.modulesList.map(function(model){
                return model.get('load').path;
            });

            return paths;
		}
	})
});