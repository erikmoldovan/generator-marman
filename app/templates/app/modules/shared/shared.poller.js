define(function( require ){
	var Poller = function Poller( call, options ){
		this.call = call;
		options = !_.isUndefined( options ) ? options : {};

		// Assume that the poller should run once immediately on load (firstLoadFlag)
		// and that it should kill itself when the app nvaigates away from the page running
		// the poller (suicideFlag)
		this.firstLoadFlag = !_.isUndefined(options.firstLoadFlag) ? options.firstLoadFlag : true;
		this.suicideFlag = !_.isUndefined(options.suicideFlag) ? options.suicideFlag : true;

		// Max number of total requests that will be made, regardless of response
		this.maxRequests = options.maxRequests;
		// Max number of requests made based on the response. If failure response reached x times, the poller stops
		this.maxFailures = options.maxFailures;

		// The means by which data is passed through the poller back to the module
		this.deferred = $.Deferred();

		this.HALT_FLAG = false;

		// The poller method, which only takes an interval parameter
		this.poll = function( interval ){
			// If the poller was stopped, then this flag will be true, and the poll should self destruct
			if( this.HALT_FLAG ) return;

			var self = this,
				timer;

			// If this is the first time the poll is run, and the flag is on, run the request once immediately
			if( this.firstLoadFlag === true ){
				timer = 0;
				this.firstLoadFlag = false;
			}else{
				timer = interval;
			}

			// Tick tock; the actual looping function of the poller
			this.tick = setTimeout( function(){
				// If data passed in is a BB Model or Collection, use fetch()
				if( self.call instanceof Backbone.Model || Backbone.Collection ){
					self.call.fetch({
						success: function( data ){
							// Pass the retrieved data back to the module with the instantiated poller
							self.deferred.notify( data );

							// If the maxRequests are maxed out, kill all
							if( --self.maxRequests <= 0) self.stop();
							// Else, do it all over again
							else self.poll( interval );
						},
						error: function( xhr, status, error ){
							// Pass back the error data in an object
							self.deferred.notify( {xhr: xhr, status: status, error: error} );

							if( --self.maxFailures <= 0) self.stop();
							else self.poll( interval );
						}
					});
				// Assumption made that this is jQuery.ajax(), since it's not a BB Model or Collection
				}else{
					self.call.done( function( data ){
						self.deferred.notify( data );

						if( --self.maxRequests <= 0) self.stop();
						else self.poll( interval );
					})
					.error( function( xhr, status, error ){
						self.deferred.notify( {xhr: xhr, status: status, error: error} );

						if( --self.maxFailures <= 0) self.stop();
						else self.poll( interval );
					});
				}
			}, timer);

			// If the suicideFlag is set (and by default, it is), then navigating away will halt all polling
			// for this instance of the Poller
			if( this.suicideFlag ){
				App.vent.on('route:changed', function(){
					self.stop();
				});
			}

			return self.deferred;
		};

		// STOP! Halting time.
		this.stop = function(){
			// Clear any active polls
			clearTimeout( this.tick );
			// And set the HALT_FLAG to short circuit the next attempted poll
			this.HALT_FLAG = true;
		};
	};

	return Poller;
});