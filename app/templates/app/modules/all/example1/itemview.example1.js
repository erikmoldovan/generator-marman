define([
		'marionette',

		'hbs!./template.itemview.example1'
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