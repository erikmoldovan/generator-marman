define(function(require){
	'use strict';

	var Marionette = require('marionette');

	return Marionette.Controller.extend({
		initialize: function(){
			console.log('[GLOBAL] Environment loaded');
		}
	});
});