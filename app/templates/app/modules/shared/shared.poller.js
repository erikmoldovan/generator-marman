define(function( require ){

	var Poller = function Poller( call, options ){
		this.call = call;
		options = !_.isUndefined( options ) ? options : {};

		this.firstLoadFlag = !_.isUndefined(options.firstLoadFlag) ? options.firstLoadFlag : true;
		this.suicideFlag = !_.isUndefined(options.suicideFlag) ? options.suicideFlag : true;

		this.maxRequests = options.maxRequests;
		this.maxFailures = options.maxFailures;

		this.deferred = $.Deferred();
		this.HALT_FLAG = false;

		this.poll = function( interval ){
			if( this.HALT_FLAG ) return;

			var self = this,
				timer;

			if( this.firstLoadFlag === true ){
				timer = 0;
				this.firstLoadFlag = false;
			}else{
				timer = interval;
			}

			this.tick = setTimeout( function(){
				if( self.call instanceof Backbone.Model || Backbone.Collection ){
					self.call.fetch({
						success: function( data ){
							self.deferred.notify( data );

							if( --self.maxRequests <= 0) return;
							else self.poll( interval );
						},
						error: function( xhr, status, error ){
							self.deferred.notify( {xhr: xhr, status: status, error: error} );

							if( --self.maxFailures <= 0) return;
							else{
								self.poll( interval );
							}
						}
					});		
				}else{
					self.call.done( function( data ){
						self.deferred.notify( data );

						if( --self.maxRequests <= 0) return;
						else self.poll( interval );
					})
					.error( function( xhr, status, error ){
						self.deferred.notify( {xhr: xhr, status: status, error: error} );

						if( --self.maxFailures <= 0) return;
						else self.poll( interval );
					});
				}
			}, timer);

			if( this.suicideFlag ){
				App.vent.on('route:changed', function(){
					self.stop();
				});
			}

			return self.deferred;
		};

		this.stop = function(){
			clearTimeout( this.tick );
			this.HALT_FLAG = true;
		};
	};

	return Poller;
});