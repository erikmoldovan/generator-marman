define([
		'marionette',

		'hbs!./template.itemview.sub2'
	],

	function( Marionette, Template ){
		'use strict';

		return Marionette.ItemView.extend({
			template: Template,

			initialize: function(){
				
			}
		});
	}
);