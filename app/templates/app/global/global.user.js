/*
 *	Global User Profile definition
 *
 *	Stores information about the logged in user that is useful throughout the app.
 *	For example, permissions level, sorting preferences, timezone, etc
 */

define(function(require){
	var Backbone = require('backbone');

	return Backbone.Model.extend({
		initialize: function(){
			// console.log(App.Cache.retrieveSession());
		}
	});
});