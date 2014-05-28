/*
 *  Shared module definition
 */

define(function(require){
    'use strict';

    var Backbone = require('backbone'),
        Marionette = require('marionette');

    return Marionette.AppRouter.extend({
        initialize: function( data ){
            // Initialize router properties
            this.controller = {};
            this.appRoutes = {};

            // Populate the appRoutes object
            this._modulesList = data.modulesList;
            this._populateRouter( this._modulesList );

            // When all routes are generated, add default route to the router
            this.on('routes:created', this._setDefaultRoute( data.baseConfig ));
        },

        _populateRouter: function( modulesList ){
            var self = this;

            modulesList.each(function( data, index ){
                var load = data.get('load'),
                    route = data.get('route');

                // Ex: { "routeFunction": function(){ App.vent.trigger( "routeTrigger" ); } }
                self.controller[ route.callback ] = function(){
                    console.log('[ROUTE] ' + route.trigger);

                    // If method fired is default, then load the full URL
                    // if( App.getCurrentRoute() != load.url ) App.navigate( load.url ); // Temporarily disabling this

                    App.vent.trigger( 'route:changed', modulesList ); // Fires Header update event
                    App.vent.trigger( route.trigger ); // Fire module routing event
                }

                // Ex: { "url(/)" : "routeFunction" }
                self.appRoutes[ load.url + "(/)" ] = route.callback;

                // Load flags
                var flags = ( !_.isUndefined( data.get('flags')) ) ? data.get('flags') : {};

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