define(function(require){
    'use strict';

    var Backbone = require('backbone'),
        Marionette = require('marionette');

    return Marionette.AppRouter.extend({
        initialize: function(data){
            // Initialize router properties
            this.controller = {};
            this.appRoutes = {};

            // Populate the appRoutes object
            this._modulesList = new Backbone.Collection( data.modules );
            this._populateRouter( this._modulesList );

            // When all routes are generated, add default route to the router
            var _modulesConfig = new Backbone.Model( data.base );

            this.on('routes:created', this._setDefaultRoute( _modulesConfig ));
        },

        _populateRouter: function(list){
            var self = this;

            list.each(function(data, index){
                var load = data.get('load'),
                    route = data.get('route');

                // { "routeFunction": function(){ App.vent.trigger( "routeTrigger" ); } }
                self.controller[ route.callback ] = function(){
                    App.vent.trigger( route.trigger );
                }

                // { "url(/)" : "routeFunction" }
                self.appRoutes[ load.url + "(/)" ] = route.callback;

                // If first in list, or has a default flag, set as the default route placeholder
                if(index == 0 || data.get('flags').default == true) self._defaultRoute = data.clone();
            });

            this.trigger('routes:created');
        },

        // Sets default route placeholder to appRoutes when _createRoutes method is complete
        _setDefaultRoute: function(base){
            // { "baseURL(/)" : "self._defaultRoute" }
            this.appRoutes[ base.get('url') + "(/)" ] = this._defaultRoute.get('route').callback;
            
            // Use the following if you want to set a callback called "default"
            // this.appRoutes[config.get("baseURL") + "(/)"] = "default";
        },

        getPaths: function(){
            var paths = this._modulesList.map(function(model){
                return model.get('load').path;
            });

            return paths;
        }
    });
});