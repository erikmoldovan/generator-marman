define([
        'marionette'
    ],

    function( Marionette ){
        'use strict';

        return Marionette.AppRouter.extend({
            initialize: function(context){
                // Initialize the properties!
                this.controller = {};
                this.appRoutes = {};

                // Load the config!
                var config = context.ModuleManager.retrieveRoutes();

                // FIRE!!!
                this._processController(config);
                this._processRoutes(config);
                this._addDefaults(context.ModuleManager.getConfig());

                console.log('Router loaded');
            },

            // Sets the router's controller
            _processController: function(config){
                var self = this;

                _.each(config, function(data){
                    self.controller[data.route] = data.callback;
                });
            },

            // Sets tje router's controller
            _processRoutes: function(config){
                var self = this;

                _.each(config, function(data){
                    self.appRoutes[data.url] = data.route;
                });
            },

            _addDefaults: function(config){
                var baseURL = "";
                if(!_.isEmpty(config.get('baseURL'))) baseURL = config.get('baseURL') + "/";

                var d = {
                    url: baseURL + "",
                    route: config.get('baseRoute') + "_" + "default",
                    callback: function(){
                        console.log('[ROUTE] Default fired');
                    }
                };

                this.controller[d.route] = d.callback; // Sets default controller
                this.appRoutes[d.url] = d.route; // Sets default route
            }
        });
    }
);