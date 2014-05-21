/*
 *	Footer controller
 */

define(function(require){
	var Marionette = require('marionette'),

		FooterView = require('./views/itemview.footer');

	return Marionette.Controller.extend({
		initialize: function( moduleslist ){
			App.footerRegion.show(new FooterView());

			console.log('[GLOBAL] Footer loaded');
		}
	})
});