/*
 *	Top level nav collection view
 */

define(function(require){
	'use strict';

	var _ = require('underscore'),
		Marionette = require('marionette'),

		ItemView = require('./itemview.nav');

	return Marionette.CollectionView.extend({
		itemView: ItemView,

		initialize: function(){
			var self = this;

			// Forces top level nav to re-render when a new model is set to active
			this.collection.on('change', function(){
				self.render();
			})
		}
	})
});