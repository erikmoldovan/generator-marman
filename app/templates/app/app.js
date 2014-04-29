require(['config'],
    function() {
        'use strict';

        require([
                'underscore',
                'jquery', 
                'backbone', 
                'marionette',
                'foundation',

                'region.dialog',
                
                'global.environment',
                'global.eventmanager',
                'global.moduleslist',
                'global.router',

                'shared.modulemanager',

                'json!./global/config/config.module.global.json'
            ],

            function( _, $, Backbone, Marionette, Foundation, DialogRegion, Environment, EventManager, ModulesList, Router, ModuleManager, GlobalConfig ){
                'use strict';

                _.extend( Marionette.Application.prototype, {
                    /**
                     * Navigate method. Handles Backbone.history.navigate behavior
                     * @param {string} route
                     * @param [{object}] options
                     */
                    navigate: function( route, options ) {
                        options || (options = {});
                        Backbone.history.navigate( route, options );
                    },

                    /**
                     * Returns current route fragment
                     * @return {string}
                     */
                    getCurrentRoute: function() {
                        return Backbone.history.fragment;
                    }
                });

                // Globalization
                window.App = new Marionette.Application();

                // Define the Application Regions
                App.addRegions({
                    headerRegion: '#header-region',
                    mainRegion: '#main-region',
                    footerRegion: '#footer-region',
                    dialogRegion: DialogRegion.extend({
                        el: '#dialog-region' // Application Dialog / Modal
                    })
                });

                // Load app-level helper methods
                App.EventManager = EventManager; // Initializes global event system
                App.Environment = new Environment; // Initializes global environment model

                // Initialize new collection to store master modules list
                App.ModulesList = new ModulesList;

                App.ModuleManager = new ModuleManager(GlobalConfig); // Initialize modules manager collection

                // Application initialization handler
                App.on('initialize:before', function(){
                    var controller = {
                        // Format: 'load_module_' + module.get('url')
                        load_module_example: function(){
                            console.log('[ROUTE] Example fired');
                        }
                    };

                    // App.Router = new Router(App, controller); // Initializes modules router

                    var modules = App.ModuleManager.retrievePaths();

                    require(modules, function(){
                        // console.log(App.ModulesList);

                        // Kick off Backbone.history to resolve current url
                        Backbone.history.start({ pushState: true, root: '/' });
                    });

                    // First time foundation initialization
                    Foundation.libs.reveal.settings = _.extend(Foundation.libs.reveal.settings, {
                        animation: 'fade',
                        animation_speed: 100   
                    });

                    Foundation.libs.tooltip.settings = _.extend( Foundation.libs.tooltip.settings, {
                        selector: '.has-tip'                
                    });

                    App.EventManager.trigger('global:app:start');
                });

                // return App;
                App.start();
            }
        );
    }
);