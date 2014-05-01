define([
		'underscore',
		'marionette',

		'hbs!global/regions/header/nav/template.item.nav'
	],

	function( _, Marionette, Template ){
		'use strict';

		return Marionette.ItemView.extend({
			template: Template
		});
	}
);