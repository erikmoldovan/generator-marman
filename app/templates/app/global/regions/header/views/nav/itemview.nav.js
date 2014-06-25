/*
 *	Individual nav item view
 */

define(function(require){
	'use strict';

	var _ = require('underscore'),
		Marionette = require('marionette'),

		Template = require('hbs!./template.item.nav');

	return Marionette.ItemView.extend({
		tagName: "li",
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

			var load = this.model.get('load');

			if(_.isArray(load.url)) App.navigate( load.url[0], {trigger: true} );
            else App.navigate( load.url, {trigger: true} );

			// App.navigate( this.model.get('load').url, {trigger: true} );
		},

		templateHelpers: function(){
			var load = this.model.get('load');

			if(_.isArray(load.url)) return {url: load.url[0]};
            else return {url: load.url};
		}
	});
});