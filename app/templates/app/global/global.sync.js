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

			this._call( options, callbacks, context );
		},

		get: function( options, callbacks, context ){
			options.type = {get: true};

			this._call( options, callbacks, context );
		},

		// {options}, {callbacks}, context
		_call: function( options, callbacks, context ){	
			// Set the options object for the AJAX call
			var url = App.Environment.getApiUrl() + ( options.url || '' );
			var interval = !_.isUndefined( options.interval ) ? options.interval : 0; // Use explicitly defined interval value, or default to single poll request

			this.firstFlag = true;

			// GET requests, with polling functonality. Poller automatically activates if an interval greater than 0 is set
			if(options.type.get) this._poll( url, interval, callbacks, context );
		},

		_poll: function( url, interval, callbacks, context ){
			var self = this;

			if( this.firstFlag && interval !== 0 ){
				interval = 1;
				this.firstFlag = false;
			}

			// Sets the timeout for polling
			var poller = setTimeout( function(){
				// AJAX call
				$.ajax({
					url: url,
					cache: false,
					success: function( data ){
						if(!_.isObject( data )) data = $.parseJSON( data );

						if( interval !== 0 ){
							if(!_.isUndefined( callbacks.condition ) && !callbacks.condition( data, context )){
								callbacks.complete( data, context );
							}else{
								callbacks.update( data, context );
								self._poll( url, interval, callbacks, context );
							}
						}
						else callbacks.complete( data, context );
					},
					error: function( xhr, status, error ){
						if(!_.isUndefined( callbacks.error )) context.callbacks.error( xhr, status, error );
						else console.error('[ERROR] Sync:', xhr, status, error );
					}
				});
			}, interval );

			App.vent.on('route:changed', function(){
				clearTimeout( poller );
			});
		}
	});
});