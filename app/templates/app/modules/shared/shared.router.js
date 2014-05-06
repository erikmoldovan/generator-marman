define([
        'backbone',
        'marionette'
    ],

    function( Backbone, Marionette ){
        'use strict';

        return Marionette.AppRouter.extend({
            initialize: function(controller){
                // Initialize the properties!
                this._defaultRoute = new Backbone.Model();

                this.controller = controller.getRouterController();
                this.appRoutes = {};

                var modulesList = controller.getModulesList();
                var modulesConfig = controller.getModulesConfig();

                this._createRoutes(modulesList);

                this.on('routes:created', this._setDefaultRoute(modulesConfig));
            },

            // Sets the router's controller
            _createRoutes: function(list){
                var self = this;

                list.each(function(data, index){
                    self.appRoutes[data.get('url') + "(/)"] = data.get('route');

                    // First loaded module is always the default, unless overriden by the default flag
                    if(index == 0 || data.get('default') == true) self._updateDefaultRoute(data);
                });

                this.trigger('routes:created');
            },

            _updateDefaultRoute: function(entry){
                var self = this;

                console.log(entry);

                _.each(entry.attributes, function(value, key){
                    self._defaultRoute.set(key, value);
                });
            },

            _setDefaultRoute: function(config){
                this.appRoutes[config.get('baseURL') + "(/)"] = this._defaultRoute.get('route');
            }
        });
    }
);