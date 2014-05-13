define(function(require){
	'use strict';

	var _ = require('underscore'),
		Marionette = require('marionette'),

		ItemView = require('global/regions/header/nav/itemview.nav');

	return Marionette.CollectionView.extend({
		itemView: ItemView
	})
});