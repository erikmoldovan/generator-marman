define([
		'marionette'
	],

	function( Marionette ){
		'use strict';

		return Marionette.Controller.extend({
			initialize: function(config){
				this._setData(config);
			},

			_setData: function(data){
				this._modulesList = new Backbone.Collection(data.list);
				this._modulesConfig = new Backbone.Model(data.config);
			},

			getModulesConfig: function(){
				return this._modulesConfig;
			},

			getModulesList: function(){
				return this._modulesList;
			},

			// Override with your own function
			getRouterController: function(){
				// return {controller object};
			}
		});
	}
);