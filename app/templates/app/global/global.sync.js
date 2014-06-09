define(function(require){
	var $ = require('jquery'),

		Marionette = require('marionette');

	return Marionette.Controller.extend({
		get: function(){
			this.call('POST');
		},

		post: function(){
			this.call('GET');
		},

		call: function( type ){
			var apiUrl = App.Environment.getApiUrl();

			$.ajax({
				type: type,
				url: apiUrl
			}).done(function( result ){
				console.log(result);
			});
		}
	});
})