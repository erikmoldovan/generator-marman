/*
 *	Header -> TopBar region layout view
 */

define(function(require){
	'use strict';

	var _ = require('underscore'),
		Backbone = require('backbone'),
		Marionette = require('marionette'),

		Template = require('hbs!./template.layout.topbar');

	return Marionette.Layout.extend({
		template: Template,

		regions: {
			
		}
	});
});