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

			initialize: function(options){
				this.context = options;
			},

			onRender: function(){
				this.nav.show(new NavView({
					collection: App.ModuleManager.getList()
				}));

				this.subnav.show(new NavView({
					collection: this.context.ModuleManager.getList()
				}));
			}
		});
	}
);