define(function(require){
	'use strict';

	var _ = require('underscore'),
		Backbone = require('backbone'),
		Marionette = require('marionette'),

		NavView = require('global/regions/header/nav/collectionview.nav'),
		Template = require('hbs!global/regions/header/template.layout.header');

	return Marionette.Layout.extend({
		template: Template,

		regions: {
			topbar: "#topbar",
			nav: "#nav",
			subnav: "#subnav"
		},

		onRender: function(){
			// this.topbar.show();

			// this.nav.show(new NavView({
			// 	collection: App.NavCollection
			// }));

			// this.subnav.show(new NavView({
			// 	collection: App.SubNavCollection
			// }));
		}
	});
});