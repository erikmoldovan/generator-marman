define(function(require){
    'use strict';

    var Backbone = require('backbone'),
        Marionette = require('marionette');

    return Marionette.AppRouter.extend({
        initialize: function(controller){
            // Initialize router properties
            this.appRoutes = {};
            this.controller = controller.getRouterController();

            // Populate the appRoutes object
            this._createRoutes( controller.getModulesList() );

            // When all routes are generated, add default route to the router
            var modulesConfig = controller.getModulesConfig();

            this.on('routes:created', this._setDefaultRoute(modulesConfig));
        },

        // Sets the router's controller by looping through the modules list collection
        _createRoutes: function(list){
            var self = this;

            list.each(function(data, index){
                // { "url(/)" : "route" }
                self.appRoutes[data.get('url') + "(/)"] = data.get('route');

                // If first in list, or has a default flag, set as the default route placeholder
                if(index == 0 || data.get('default') == true) self._defaultRoute = data.clone();
            });

            this.trigger('routes:created');
        },

        // Sets default route placeholder to appRoutes when _createRoutes method is complete
        _setDefaultRoute: function(config){
            // { "baseURL(/)" : "self._defaultRoute" }
            this.appRoutes[config.get('baseURL') + "(/)"] = this._defaultRoute.get('route');
            
            // Use the following if you want to set a callback called "default"
            /*this.appRoutes[config.get("baseURL") + "(/)"] = "default";*/
        }
    });
});