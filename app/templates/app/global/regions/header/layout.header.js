define([
		'underscore',
		'backbone',
		'marionette',

		'global/regions/header/nav/collectionview.nav',

		"hbs!global/regions/header/template.layout.header"
	],

	function( _, Backbone, Marionette, NavView, Template ){
		'use strict';

		return Marionette.Layout.extend({
			template: Template,

			regions: {
				topbar: "#topbar",
				nav: "#nav",
				subnav: "#subnav"
			},

			onRender: function(){
				// this.topbar.show();

				this.nav.show(new NavView({
					collection: App.NavCollection
				}));

				this.subnav.show(new NavView({
					collection: App.SubNavCollection
				}));
			}
		});
	}
);