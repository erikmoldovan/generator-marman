define([
		'underscore',
		'marionette',

		'global/regions/header/nav/collectionview.nav',

		"hbs!global/regions/header/template.layout.header"
	],

	function( _, Marionette, NavView, Template ){
		'use strict';

		return Marionette.Layout.extend({
			template: Template,

			regions: {
				topbar: "#topbar",
				nav: "#nav",
				subnav: "#subnav"
			},

			onRender: function(){
				this.nav.show(new NavView({
					collection: App.ModuleManager.modulesCollection
				}));
			}
		});
	}
);