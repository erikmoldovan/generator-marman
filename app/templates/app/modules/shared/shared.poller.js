define(function( require ){

	var Poller = function Poller( model, options ){
		this.model = model;
		options = (options || {});

		this.firstLoadFlag = true;
		this.maxRequests = options.maxRequests;
		this.maxFailures = options.maxFailures;
		this.suicideFlag = (options.suicideFlag || true);

		this.poll = function( interval ){
			deferred = $.Deferred();

			var self = this,
				timer;

			if( this.firstLoadFlag ){
				timer = 0;
				this.firstLoadFlag = false;
			}else{
				timer = interval;
			}

			this.tick = setTimeout( function(){
				model.fetch()
					.done( function( data ){
						deferred.resolve( data );

						if( --this.maxRequests <= 0) return;
						else self.poll( interval );
					})
					.error( function( xhr, status, error ){
						// console.error('[ERROR] Sync:', xhr, status, error );
						deferred.resolve( {xhr: xhr, status: status, error: error} );

						if( --this.maxFailures <= 0) return;
						else self.poll( interval );
					});
			}, timer);

			if( this.suicideFlag ){
				App.vent.on('route:changed', function(){
					self.stop();
				});
			}

			return deferred;
		};

		this.stop = function(){
			clearTimeout( this.tick );
		};
	};

	return Poller;
});