/*
 *	Header controller
 */

define(function(require){
	var Marionette = require('marionette'),

		HeaderView = require('./views/layout.header');

	return Marionette.Controller.extend({
		initialize: function( moduleslist ){
			this._navCollection = moduleslist; // Set main nav collection to global modules list
			this._subnavCollection = new Backbone.Collection(); // Set sub nav collection to empty

			App.headerRegion.show(new HeaderView({
				navCollection: this._navCollection,
				subnavCollection: this._subnavCollection
			}));

			var self = this;

			App.vent.on('route:changed', function( moduleslist ){
				// set subnav collection to new submodules list
				self._subnavCollection.reset( moduleslist.toJSON() );

				// Ex: /example1/sub1 -> example1
				var currentURL = App.getCurrentRoute().substring(0, App.getCurrentRoute().indexOf('/'));

				self._navCollection.each( function(model){
					var modelURL = model.get('load').url;

					// If top nav elements matches substringed URL...
					if( modelURL == currentURL ){
						model.set('active', true); // Then set its model to active
					}else{
						model.set('active', false); // Else, deactivate it
					}
				});
			});

			console.log('[GLOBAL] Header loaded');
		}
	})
});