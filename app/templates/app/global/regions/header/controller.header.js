define(function(require){
	var Marionette = require('marionette'),

		HeaderView = require('./views/layout.header');

	return Marionette.Controller.extend({
		initialize: function( moduleslist ){
			this._navCollection = moduleslist;
			this._subnavCollection = new Backbone.Collection();

			App.headerRegion.show(new HeaderView({
				navCollection: this._navCollection,
				subnavCollection: this._subnavCollection
			}));

			var self = this;

			App.vent.on('route:changed', function( moduleslist ){
				self._subnavCollection.reset( moduleslist.toJSON() );
			});

			console.log('[GLOBAL] Header loaded');
		}
	})
});