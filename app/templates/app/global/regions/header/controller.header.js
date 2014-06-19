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
				self.updateNav();
				self.updateSubnav( moduleslist );
			});

			console.log('[GLOBAL] Header loaded');
		},

		updateNav: function(){
			// Ex: /example1/sub1 -> example1
			var currentURL = App.getCurrentRoute().split("/")[0];

			this._navCollection.each( function(model){
				var modelURL = model.get('load').url;

				// If top nav elements matches substringed URL...
				if( modelURL == currentURL ){
					model.set('active', true); // Then set its model to active
				}else{
					model.set('active', false); // Else, deactivate it
				}

				var flags = (!_.isUndefined( model.get('flags') )) ? model.get('flags') : {};
			
	            if(flags.hidden){
	            	model.collection.remove( model );
	            }
			});
		},

		updateSubnav: function( moduleslist ){
			// set subnav collection to new submodules list
			this._subnavCollection.reset( moduleslist.toJSON() );

			this._subnavCollection.each( function(model){
	            var flags = (!_.isUndefined( model.get('flags') )) ? model.get('flags') : {};
			
	            if(flags.hidden){
	            	model.collection.remove( model );
	            }
			});
		}
	})
});