define([
        'backbone',
        'marionette'
    ],

    function( Backbone, Marionette ){
        'use strict';

        return Marionette.AppRouter.extend({
            initialize: function(context){
                // Initialize the properties!
                this._defaultRoute = new Backbone.Model();
                this.controller = {};
                this.appRoutes = {};

                // Load the config!
                var list = context.ModuleManager.retrieveRoutes();

                // FIRE!!!
                this._createRoutes(list);

                var config = context.ModuleManager.getConfig();

                this.on('routes:created', this._setDefaultRoute(config));
            },

            // Sets the router's controller
            _createRoutes: function(list){
                var self = this;

                list.each(function(data, index){
                    self.controller[data.get('route')] = data.get('callback');
                    self.appRoutes[data.get('url') + "(/)"] = data.get('route');

                    // First loaded module is always the default, unless overriden by the default flag
                    if(index == 0 || data.get('default')) self._updateDefaultRoute(data);
                });

                this.trigger('routes:created');
            },

            _updateDefaultRoute: function(entry){
                var self = this;

                _.each(entry.attributes, function(value, key){
                    self._defaultRoute.set(key, value);
                });
            },

            _setDefaultRoute: function(config){
                console.log(config);

                this.controller["default"] = this._defaultRoute.get('callback');
                this.appRoutes[config.get('baseURL') + "(/)"] = this._defaultRoute.get('route');
                // this.appRoutes[""] = "default"; // Alternate way of doing the default route
            
                console.log(this.appRoutes);
            }
        });
    }
);