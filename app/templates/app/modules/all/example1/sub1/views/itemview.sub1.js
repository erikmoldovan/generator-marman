define(function(require){
	'use strict';
	
	var Marionette = require('marionette'),
		Template = require('hbs!./template.itemview.sub1');

	return Marionette.ItemView.extend({
		template: Template
	});
});