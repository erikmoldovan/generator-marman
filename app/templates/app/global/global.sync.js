/*
 *	Global API AJAX Sync
 *	
 *	All POST, GET calls should be routed through this
 *
 *	Must have defined when called: {options.url} and {callbacks.complete} and context
 */

define(function(require){
	var $ = require('jquery'),

		Marionette = require('marionette');

	return Marionette.Controller.extend({
		post: function( options, callbacks, context ){
			options.type = {post: true};

			this.call( options, callbacks, context );
		},

		get: function( options, callbacks, context ){
			options.type = {get: true};

			this.call( options, callbacks, context );
		},

		// {options}, {callbacks}, context
		call: function( options, callbacks, context ){
			// Set the options object for the AJAX call
			options || (options = {}),
			url = App.Environment.getApiUrl() + (options.url || ''),
			interval = (options.interval || 0); // Use explicitly defined interval value, or default to single poll request

			// Initial poll hit (regardless of request type)
			this.poll( url, 0, callbacks, context );

			// GET requests, with polling functonality. Poller automatically activates if an interval greater than 0 is set
			if(options.type.get && interval > 0) this.poll( url, interval, callbacks, context );
		},

		poll: function( url, interval, callbacks, context ){
			var self = this;

			// Sets the timeout for polling
			setTimeout(function(){
				// AJAX call
				$.ajax({
					url: url,
					success: function( data ){
						try{
							data = JSON.parse( data );
						}catch(e){
							console.log(e);
							return;
						}

						if(!callbacks.condition( data, context ) && interval != 0){
							callbacks.update( data, context );
							self.poll( url, interval, callbacks, context );
						}
						else callbacks.complete( data, context );
					},
					error: function( xhr, status, error ){
						if(!_.isUndefined(callbacks.error)) context.callbacks.error( xhr, status, error );
						else console.error('[ERROR] Sync:', xhr, status, error );
					}
				});
			}, interval);
		}
	});
})