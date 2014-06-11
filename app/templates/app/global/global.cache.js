/*
 *	Global Cache Manager
 *
 *	All entries into localStorage, and requests to such, should be handled through this
 */

define(function(require){
	var $ = require('jquery'),

		Marionette = require('marionette');

	return Marionette.Controller.extend({
		initialize: function(){
			// console.log(localStorage);
		},

		retrieveLocal: function(){
			return localStorage;
		},

		retrieveSession: function(){
			return sessionStorage;
		}
	});
})