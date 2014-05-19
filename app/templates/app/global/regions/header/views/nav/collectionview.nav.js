define(function(require){
	'use strict';

	var _ = require('underscore'),
		Marionette = require('marionette'),

		ItemView = require('./itemview.nav');

	return Marionette.CollectionView.extend({
		itemView: ItemView,

		initialize: function(){
			// This is for the subnav active state
			this.collection.on('reset', function( collection ){
				var currentURL = App.getCurrentRoute();

				collection.each( function(model){
					var modelURL = model.get('load').url;

					console.log(modelURL, ' : ', currentURL);

					if( modelURL == currentURL ){
						model.set('active', true);
					}else{
						model.set('active', false);
					}
				});
			});
		}

		// onRender: function(){
		// 	// This is for the nav active state
		// 	if( !_.isUndefined(App.getCurrentRoute()) ){
		// 		var currentURL = App.getCurrentRoute(),
		// 		currentBaseURL = currentURL.substring(0, currentURL.indexOf('/'));

		// 		this.collection.each(function(model){
		// 			var modelURL = model.get('load').url,
		// 				modelBaseURL = modelURL.substring(0, modelURL.indexOf('/'));

		// 			console.log(modelBaseURL, ' : ', currentBaseURL);

		// 			if ( modelBaseURL == currentBaseURL ){
		// 				model.set('active', true);
		// 			}
		// 		});
		// 	}
		// }
	})
});