define([
		'underscore',
		'backbone',
		'marionette',

		"hbs!template.layout.content.hbs"
	],

	function( _, Backbone, Marionette, Template ){
		'use strict';

		return Marionette.Layout.extend({
			template: Template,

			regions: {
				
			}
		});
	}
);