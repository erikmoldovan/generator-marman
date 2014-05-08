define([
		'marionette'
	],

	function( Marionette ){
		'use strict';

		return Marionette.Controller.extend({
			initialize: function(data){
				this._modulesConfig = new Backbone.Model(data.config);
				this._modulesList = new Backbone.Collection(data.modules);
				
				if(data.global) this._globalModules = new Backbone.Collection(data.global);
			},

			getModulesConfig: function(){
				return this._modulesConfig;
			},

			getModulesList: function(){
				return this._modulesList;
			},

			getPaths: function(){
				var paths = this._modulesList.pluck('path');

				if(!_.isUndefined(this._globalModules)){
					this._globalModules.each(function(data){
						paths.unshift(data.get('path'));
					});
				}

				return paths;
			},

			// Override with your own function
			getRouterController: function(){
				// return {controller object};
			}
		});
	}
);