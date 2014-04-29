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
                // context.EventManager.trigger('global:router:loaded');
            }
        });
    }
);