define([
        'marionette'
    ],

    function(Marionette){
        'use strict';

        var Router = Marionette.AppRouter.extend({
            initialize: function(){
                this.processRoutes();
                // this.createController();
            },

            processRoutes: function(){
                this.appRoutes = App.ModuleManager.retrieveRoutes();
            },

            controller: {
                // Format: 'load_module_' + module.baseUrl
                load_module_test1: function(){
                    console.log('[ROUTE] Test1 route fired');
                },

                load_module_test2: function(){
                    console.log('[ROUTE] Test2 route fired');
                },

                default: function(){
                    console.log('[ROUTE] Default route fired');
                }
            }
        });

        return Router;
    }
);