define([
		'underscore',
		'marionette',

		'global/regions/header/nav/itemview.nav'
	],

	function( _, Marionette, ItemView ){
		'use strict';

		return Marionette.CollectionView.extend({
			itemView: ItemView
		});
	}
);