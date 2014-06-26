/*
 *  Shared module definition
 */

define(function(require){
    var Backbone = require('backbone'),
        Marionette = require('marionette');

    return Marionette.AppRouter.extend({
        initialize: function( data ){
            // Initialize router properties
            this.controller = {};
            this.appRoutes = {};

            // Populate the appRoutes object
            this._modulesList = data.modulesList;
            this._baseConfig = data.baseConfig;
            this._populateRouter( this._modulesList, this._baseConfig );

            // When all routes are generated, add default route to the router
            this.on('routes:created', this._setDefaultRoute( data.baseConfig ));

             this.on('route:default', function(){
            //     var load = this.appRoutes,
            //         currentURL = App.getCurrentRoute();

            //     _.each(load, function(key, url){
            //         if(url.slice(0, -3) == currentURL) return;
            //     });
            });
        },

        _populateRouter: function( modulesList ){
            var self = this;

            modulesList.each(function( data, index ){
                var load = data.get('load'),
                    route = data.get('route');

                var flags = ( !_.isUndefined( data.get('flags')) ) ? data.get('flags') : {};

                 // { "routeFunction": function(){ App.vent.trigger( "routeTrigger" ); } }
                self.controller[ route.callback ] = function(){
                    console.log('[ROUTE] ' + route.trigger);

                    // If method fired is default, then load the full URL
                    // if(!flags.hidden){
                    //     if( App.getCurrentRoute() != (load.url || load.url[0]) ) {
                    //         if(_.isArray(load.url)) App.navigate( load.url[0] );
                    //         else App.navigate( load.url );
                    //     }
                    // }

                    App.vent.trigger( 'route:changed', modulesList ); // Fires Header update event
                    App.vent.trigger( route.trigger, arguments ); // Fire module routing event
                }

                // { "url(/)" : "routeFunction" }
                if(_.isArray( load.url ) ){
                    _.each(load.url, function( url ){
                        self.appRoutes[ url + "(/)" ] = route.callback;
                    });
                }else{
                    self.appRoutes[ load.url + "(/)" ] = route.callback;
                }

                // If first in list, or has a default flag, set as the default route placeholder
                if( index == 0 || flags.default ) self._defaultRoute = data.clone();
            });

            this.trigger('routes:created');
        },

        // Sets default route placeholder to appRoutes when _createRoutes method is complete
        _setDefaultRoute: function( base ){
            /* Controller */
            // Ex: { "default" : default route's function }
            this.controller[ "default" ] = this.controller[ this._defaultRoute.get('route').callback ];

            /* AppRoutes */
            // Ex: { "baseURL(/)" : "default" }
            this.appRoutes[ base.get("url") + "(/)" ] = "default";
        },

        getDefaultRoute: function(){
            return this.controller.default;
        }
    });
});