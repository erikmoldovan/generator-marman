define([
        'marionette'
    ],

    function( Marionette ){
        'use strict';

        return Marionette.AppRouter.extend({
            initialize: function(){
                // Initialize the properties!
                this.controller = {};
                this.appRoutes = {};

                // Load the config!
                var config = App.ModulesList.retrieveRoutes();

                // FIRE!!!
                this._processController(config);
                this._processRoutes(config);
            },

            // Sets the router's controller
            _processController: function(config){
                var self = this;

                _.each(config, function(data){
                    self.controller[data.route] = data.callback;
                });

                this.controller[this.default.route] = this.default.callback; // Sets default controller
            },

            // Sets tje router's controller
            _processRoutes: function(config){
                var self = this;

                _.each(config, function(data){
                    self.appRoutes[data.url] = data.route;
                });

                this.appRoutes[this.default.url] = this.default.route; // Sets default route
            },

            default: {
                url: "*default",
                route: "default",
                callback: function(){
                    console.log('[ROUTE] Default fired');
                }
            }
        });
    }
);