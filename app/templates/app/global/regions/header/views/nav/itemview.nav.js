define(function(require){
	'use strict';

	var _ = require('underscore'),
		Marionette = require('marionette'),

		Template = require('hbs!./template.item.nav');

	return Marionette.ItemView.extend({
		template: Template,

		events: {
			"click a": "loadLink"
		},

		loadLink: function(e){
			e.preventDefault();

			this.$el.addClass('active');

			App.navigate(this.model.get('load').url, {trigger: true}); // I feel as though this may be a kludge
		}
	});
});