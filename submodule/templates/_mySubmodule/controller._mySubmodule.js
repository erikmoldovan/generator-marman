define(function(require) {
	'use strict';

	var Marionette = require('marionette'),
		ListView = require('./views/list.view');

	return Marionette.Controller.extend({
		initialize: function() {
			App.vent.on('route:module:commitments:related', function() {
				var layout = new ListView.CommitmentsLayout();

				layout.on('render', function() {

				});

				App.mainRegion.show(layout);
			});
		}
	});
});