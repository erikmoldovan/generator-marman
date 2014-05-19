define(function(require){
	'use strict';

	var _ = require('underscore'),
		Backbone = require('backbone'),
		Marionette = require('marionette'),

		NavView = require('./nav/collectionview.nav'),
		Template = require('hbs!./template.layout.header');

	return Marionette.Layout.extend({
		template: Template,

		regions: {
			topbar: "#topbar",
			nav: "#nav",
			subnav: "#subnav"
		},

		initialize: function( options ){
			this._navCollection = options.navCollection;
			this._subnavCollection = options.subnavCollection;
		},

		onRender: function(){
			// this.topbar.show();

			this.nav.show( new NavView({ collection: this._navCollection }) );

			this.subnav.show( new NavView({ collection: this._subnavCollection }) );
		}
	});
});