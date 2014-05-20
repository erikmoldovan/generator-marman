define(function(require){
	'use strict';

	var _ = require('underscore'),
		Marionette = require('marionette'),

		ItemView = require('./itemview.nav');

	return Marionette.CollectionView.extend({
		itemView: ItemView,

		initialize: function(){
			var self = this;

			this.collection.on('change', function(){
				self.render();
			})
		}
	})
});