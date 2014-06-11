/*
 *	Global Environment definition
 *
 *	Instantiates for every app instance based on the environment the app is served from
 */

define(function(require){
	var Backbone = require('backbone');

	return Backbone.Model.extend({
		url: '/app/environment.json',

		defaults: {
			'api': {
				'protocol': 'https',
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
			/* Example: http://localhost:80/ */
			return this.get('api').protocol + '://' + this.get('api').url + ':' + this.get('api').port + this.get('root');
		}
	});
});