require(['config'],
    function() {
        'use strict';

        require([
                'underscore',
                'jquery', 
                'backbone', 
                'marionette',
                'foundation',
                
                './global/global.environment',
                'shared.router',
                'shared.modulemanager',

                './global/regions/header/layout.header',
                './global/regions/footer/layout.footer',
                './global/regions/region.dialog',

                'json!./config.module.app.json'
            ],

            function( _, $, Backbone, Marionette, Foundation, Environment, Router, ModuleManager, HeaderView, FooterView, DialogRegion, ModuleConfig ){
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

                // Instantiate App
                window.App = new Marionette.Application();

                // Instantiate App Modules
                App.on('initialize:before', function(){
                    App.Environment = new Environment; // Initializes global environment model
                    App.ModuleManager = new ModuleManager(ModuleConfig); // Initialize app level module manager
                
                    // Define Regions
                    App.addRegions({
                        headerRegion: '#header-region',
                        mainRegion: '#main-region',
                        footerRegion: '#footer-region',
                        dialogRegion: DialogRegion.extend()
                    });
                });

                // Load Custom Modules
                App.addInitializer(function(){
                    var modules = App.ModuleManager.retrievePaths();

                    require(modules, function(){
                        App.Router = new Router(App); // Initialize the router
                        
                        // Kick off Backbone.history to resolve current url
                        Backbone.history.start({ pushState: true, root: '/' });
                    });
                });

                // Define App View Configuration
                App.on('initialize:after', function(){
                    // First time foundation initialization
                    Foundation.libs.reveal.settings = _.extend(Foundation.libs.reveal.settings, {
                        animation: 'fade',
                        animation_speed: 100   
                    });

                    Foundation.libs.tooltip.settings = _.extend( Foundation.libs.tooltip.settings, {
                        selector: '.has-tip'                
                    });

                    console.log('[GLOBAL] App started');
                });

                // Start the App
                App.start();
            }
        );
    }
);