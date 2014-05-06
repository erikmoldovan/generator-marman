define([
		'underscore',
		'marionette',

		'hbs!global/regions/header/nav/template.item.nav'
	],

	function( _, Marionette, Template ){
		'use strict';

		return Marionette.ItemView.extend({
			template: Template,

			events: {
				"click a": "loadLink"
			},

			loadLink: function(e){
				e.preventDefault();

				this.$el.addClass('active');

				App.navigate(this.model.get('url'), {trigger: true}); // I feel as though this may be a kludge
			}
		});
	}
);