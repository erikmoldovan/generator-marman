/*
 * MyModule MySubmodule sub module definition
 */

define(function(require) {
	'use strict';

	var Controller = require('./controller.my_submodule');

	return App.module('Commitments.My_Submodule', {
		initialize: function() {
			// Instantiate Module components
			var controller = new Controller();

			console.log('[MODULE] My_Module::My_Submodule loaded');
		}
	});
});