define(function(require){
	var Marionette = require('marionette');

	return Marionette.Controller.extend({
		initialize: function(){
			console.log('Header loaded');
		}
	})
});