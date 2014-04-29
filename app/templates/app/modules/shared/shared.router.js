define([
        'marionette'
    ],

    function( Marionette ){
        'use strict';

        return Marionette.AppRouter.extend({
            initialize: function(context){
                this._processRoutes(context);
            },

            // Fetches the global module routing data from App.ModuleManager
            _processRoutes: function(context){
                this.appRoutes = context.ModuleManager.retrieveRoutes();

                context.EventManager.trigger('global:router:loaded');
            },

            controller: {
                // Format: 'load_module_' + module.get('url')
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