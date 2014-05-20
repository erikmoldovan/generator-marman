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
				// set subnav collection to new submodules list
				self._subnavCollection.reset( moduleslist.toJSON() );

				var currentURL = App.getCurrentRoute().substring(0, App.getCurrentRoute().indexOf('/'));

				self._navCollection.each( function(model){
					var modelURL = model.get('load').url;

					if( modelURL == currentURL ){
						model.set('active', true);
					}else{
						model.set('active', false);
					}
				});
			});

			console.log('[GLOBAL] Header loaded');
		}
	})
});