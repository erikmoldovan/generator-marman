define([
		'underscore',
		'backbone',
		'marionette',

		"hbs!global/regions/footer/template.layout.footer"
	],

	function( _, Backbone, Marionette, Template ){
		'use strict';

		return Marionette.Layout.extend({
			template: Template,

			regions: {
				
			},

			initialize: function(options){
				_.bindAll(this);
			}
		});
	}
);