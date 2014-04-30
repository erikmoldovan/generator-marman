define([
        'marionette'
    ],

    function( Marionette ){
        'use strict';

        return Marionette.AppRouter.extend({
            initialize: function(){
                this.controller = {};
                this.appRoutes = {};

                // Should only be called upon by App instantiation
                // this.addRoutes(context, controller);
            },

            // // Sets thiis router's controller
            // _processController: function(controller){
            //     delete this.controller.default; // Kludgey

            //     var self = this;

            //     _.each(controller, function(value, key){
            //         self.controller[key] = value;
            //     });

            //     this.controller.default = this.default.controller; // McKludgerson
            // },

            // // Fetches the global module routing data from App.ModuleManager
            // _processRoutes: function(context){
            //     delete this.appRoutes["*default"];

            //     var routes = context.ModuleManager.retrieveRoutes(),
            //         self = this;

            //     _.each(routes, function(value, key){
            //         self.appRoutes[key] = value;
            //     });

            //     this.appRoutes["*default"] = "default";
            // },

            // // Adds routes from modules when called upon
            // addRoutes: function(context, controller){
            //     this._processController(controller);
            //     this._processRoutes(context);
            // },

            // default: {
            //     // approute: {
            //     //     "*default": "default"
            //     // },
            //     controller: function(){
            //         console.log(App.Router.appRoutes);
            //         console.log(App.Router.controller);
            //         console.log('[ROUTE] Default fired');
            //     }
            // }
        });
    }
);