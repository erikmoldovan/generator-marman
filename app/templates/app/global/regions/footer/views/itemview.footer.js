define(function(require){
	'use strict';

	var _ = require('underscore'),
		Marionette = require('marionette'),

		Template = require('hbs!./template.item.footer');

	return Marionette.ItemView.extend({
		template: Template
	});
});