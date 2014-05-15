define(function(require){
	var Marionette = require('marionette'),

		HeaderView = require('./views/layout.header');

	return Marionette.Controller.extend({
		initialize: function( moduleslist ){
			console.log('[GLOBAL] Header loaded');

			this._navCollection = moduleslist;
			this._subnavCollection = new Backbone.Collection();

			App.headerRegion.show(new HeaderView({
				navCollection: this._navCollection,
				subnavCollection: this._subnavCollection
			}));
		},

		populateSubnav: function( moduleslist ){
			if(moduleslist !== this._subnavCollection){
				console.log('changing');
				this._subnavCollection = moduleslist;

				App.vent.trigger('nav:changed');
			}
		}
	})
});