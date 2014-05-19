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
			if( this.model.get('active') ) this.$el.addClass('active');
			else this.$el.removeClass('active');
		},

		loadLink: function( e ){
			e.preventDefault();

			App.navigate( this.model.get('load').url, {trigger: true} ); // I feel as though this may be a kludge
		}
	});
});