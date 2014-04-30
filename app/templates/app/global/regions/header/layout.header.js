define([
		'underscore',
		'marionette',

		'global/regions/header/views/collectionview.nav',

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

			initialize: function(options){
				_.bindAll(this);
			},

			onRender: function(){
				this.nav.show(new NavView(App.ModuleManager.modulesCollection));
			}
		});
	}
);