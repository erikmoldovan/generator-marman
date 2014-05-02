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

			initialize: function(context){
				this.populateCollections(context);
			},

			populateCollections: function(context){
				this.NavCollection = App.ModuleManager.getList(),
				this.SubNavCollection = context.ModuleManager.getList();
			},

			onRender: function(){
				this.nav.show(new NavView({
					collection: this.NavCollection
				}));

				this.subnav.show(new NavView({
					collection: this.SubNavCollection
				}));
			}
		});
	}
);