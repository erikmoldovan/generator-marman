/*
 *  Example : Sub1 sub-module
 *
 *  This module shows the most basic configuration: A module with no sub-modules.
 *  When you've reached the end of the road, you don't need a Router, and you don't need
 *  a Controller that extends from shared.controller. You just need the Module, a Marionette.Controller,
 *  and the views and templates for the module.
 *
 */

define(function(require){
	'use strict';

	var Controller = require('./controller.sub1');

	return App.module( 'Example2.Sub1', {
		initialize: function(){
			// Instantiate Module components
	        this.Controller = new Controller();

        	console.log('[MODULE] Example2::Sub1 loaded');
		}		
	});
});