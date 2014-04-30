define([
		'underscore',
		'marionette',

		'global/regions/header/views/itemview.nav'
	],

	function( _, Marionette, ItemView ){
		'use strict';

		return Marionette.CollectionView.extend({
			itemView: ItemView,

			initialize: function(options){
				_.bindAll(this);

				console.log(options);
			}
		});
	}
);