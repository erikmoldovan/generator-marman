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

					if( modelURL == currentURL ){
						model.set('active', true);
					}else{
						model.set('active', false);
					}
				});
			});
		}
	})
});