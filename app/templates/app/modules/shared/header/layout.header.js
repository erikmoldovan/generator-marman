define([
		'underscore',
		'backbone',
		'marionette',

		"hbs!template.layout.header.hbs"
	],

	function( _, Backbone, Marionette, Template ){
		'use strict';

		return Marionette.Layout.extend({
			template: Template,

			regions: {
				topbar: "#topbar",
				nav: "#nav",
				subnav: "#subnav"
			}
		});
	}
);