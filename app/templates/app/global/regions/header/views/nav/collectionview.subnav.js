/*
 *	Subnav collection view
 */

define(function(require){
	'use strict';

	var _ = require('underscore'),
		Marionette = require('marionette'),

		ItemView = require('./itemview.nav');

	return Marionette.CollectionView.extend({
		itemView: ItemView,

		initialize: function(){
			// When a new module/submodule is set to active, the subnav collection resets
			this.collection.on('reset', function( collection ){
				var currentURL = App.getCurrentRoute(); // Grab the current URL, minus the app's base URL

				// Loop through the subnav collection...
				collection.each( function(model){
					var modelURL = model.get('load').url;

					// ...and match the current URL to the URL's assigned to each submodule
					if(_.isArray( modelURL )){
						_.each(modelURL, function(url){
							if( url == currentURL ){
								model.set('active', true);
								return;
							}
						});

						// model.set('active', false);
					}else{
						if( modelURL == currentURL ){
							model.set('active', true); // If they match, set the model's active attribute
						}else{
							model.set('active', false); // Else, set model.active to false
						}
					}
				});
			});
		}
	})
});