/*
 *	Header module base layout view
 */

define(function(require){
	'use strict';

	var _ = require('underscore'),
		Backbone = require('backbone'),
		Marionette = require('marionette'),

		TopBarView = require('./topbar/layout.topbar'),
		NavView = require('./nav/collectionview.nav'),
		SubNavView = require('./nav/collectionview.subnav'),

		Template = require('hbs!./template.layout.header');

	return Marionette.Layout.extend({
		template: Template,

		regions: {
			topbar: "#topbar",
			nav: "#nav",
			subnav: "#subnav"
		},

		initialize: function( options ){
			// Sets collections to this Layout's scope
			this._navCollection = options.navCollection;
			this._subnavCollection = options.subnavCollection;
		},

		onRender: function(){
			// Populate regions with views
			this.topbar.show( new TopBarView() );
			this.nav.show( new NavView({ collection: this._navCollection }) );
			this.subnav.show( new SubNavView({ collection: this._subnavCollection }) );
		}
	});
});