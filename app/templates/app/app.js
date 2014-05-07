require(['../config'],
    function() {
        'use strict';

        require([
                'underscore',
                'jquery', 
                'backbone', 
                'marionette',
                'foundation',
                
                './controller.app',
                'json!./config.app.json',
                './modules/shared/shared.router',

                './global/regions/header/layout.header',
                './global/regions/region.dialog',
                './global/global.navcollection'
            ],

            function( _, $, Backbone, Marionette, Foundation,
                    Controller, ModuleConfig, Router,
                    HeaderView, DialogRegion, NavCollection ){
                'use strict';

                _.extend( Marionette.Application.prototype, {
                    navigate: function( route, options ) {
                        options || (options = {});

                        Backbone.history.navigate(route, options);
                    },

                    getCurrentRoute: function() {
                        return Backbone.history.fragment;
                    }
                });

                // Instantiate the App
                window.App = new Marionette.Application();

                // Instantiate App Modules
                App.on('initialize:before', function(){
                    App.Controller = new Controller( ModuleConfig );
                    App.Router = new Router( App.Controller );

                    // Define Regions
                    App.addRegions({
                        headerRegion: '#header-region',
                        mainRegion: '#main-region',
                        dialogRegion: DialogRegion.extend()
                    });
                });

                App.addInitializer(function(){
                    // var modules = App.ModuleManager.retrievePaths();

                    // require(modules, function(){
                        Backbone.history.start({ pushState: true, root: '/' });
                    // });
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

                    // Populate App Regions
                    console.log('hue3');
                    App.NavCollection = new NavCollection(); // Each module handles its own top level nav. So App is main nav, module is sub nav
                    // App.SubNavCollection = new NavCollection();
                    App.headerRegion.show(new HeaderView());

                    console.log('[GLOBAL] App started');
                });

                // Start the App
                console.log('hue');
                App.start();
                console.log('hue2');
            }
        );
    }
);