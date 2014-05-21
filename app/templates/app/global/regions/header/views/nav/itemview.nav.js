/*
 *	Individual nav item view
 */

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

		onRender: function(){
			// Load nav item active state based on model attribute
			if( this.model.get('active') ) this.$el.addClass('active');
			else this.$el.removeClass('active');
		},

		loadLink: function( e ){
			e.preventDefault(); // Prevent page refresh

			App.navigate( this.model.get('load').url, {trigger: true} ); // Use Backbone.history to load the new url
		}
	});
});