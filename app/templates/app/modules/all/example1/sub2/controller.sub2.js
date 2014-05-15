define(function(require){
	'use strict';

	var Marionette = require('marionette'),
		Sub2View = require('./views/itemview.sub2');

	return Marionette.Controller.extend({
		initialize: function(){
            App.vent.on('route:module:example1:sub2', function(){
                App.contentRegion.show(new Sub2View());
            });
		}
	});
});