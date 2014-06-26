define(function(require){
	var Marionette = require('marionette');

	return Marionette.Region.extend({
		initialize: function(){
			var self = this;

			App.vent.on('route:changed', function(){
				self.reset();
			});
		}
	});
});