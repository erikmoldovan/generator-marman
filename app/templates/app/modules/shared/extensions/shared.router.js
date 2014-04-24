define([
        'marionette'
    ],

    function( Marionette ){
        'use strict';

        return Marionette.AppRouter.extend({
            initialize: function(){
                this.processRoutes();

                App.EventManager.trigger('global:router:loaded');
            },

            // Fetches the global module routing data from App.ModuleManager
            processRoutes: function(){
                this.appRoutes = App.ModuleManager.retrieveRoutes();
            },

            controller: {
                // Format: 'load_module_' + module.baseUrl
                load_module_test1: function(){
                    App.EventManager.trigger('route:test1:fired');
                },

                load_module_test2: function(){
                    App.EventManager.trigger('route:test2:fired');
                },

                default: function(){
                    App.EventManager.trigger('route:default:fired');
                }
            }
        });
    }
);