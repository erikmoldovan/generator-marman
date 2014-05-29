define(function(require){
	var Backbone = require('backbone');

	return Backbone.Model.extend({
		url: '/app/environment.json',

		defaults: {
			'target': 'production'
		},

		initialize: function(){
			this.fetch();
		}
	});
});