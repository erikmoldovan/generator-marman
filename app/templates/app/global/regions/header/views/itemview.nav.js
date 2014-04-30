define([
		'underscore',
		'marionette',

		'hbs!global/regions/header/views/template.item.nav'
	],

	function( _, Marionette, Template ){
		'use strict';

		return Marionette.ItemView.extend({
			template: Template,

			initialize: function(options){
				_.bindAll(this);

				console.log(model);
			}
		});
	}
);