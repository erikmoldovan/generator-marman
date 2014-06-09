define(function(require){
	var Backbone = require('backbone');

	return Backbone.Model.extend({
		url: '/app/environment.json',

		defaults: {
			'target': 'production',
			'api': {
				'url': 'localhost',
				'port': '80'
			},
			'root': '/'
		},

		initialize: function(){
			this.fetch();
		},

		getRoot: function(){
			return this.get('root');
		},

		getApiUrl: function(){
			return 'http://' + this.get('api').url + ':' + this.get('api').port + this.get('root');
		}
	});
});