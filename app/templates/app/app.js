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
                'json!./config.module.app.json',
                './modules/shared/shared.router',

                './global/regions/header/controller.header',
                './global/regions/region.dialog'
            ],

            function( _, $, Backbone, Marionette, Foundation,
                    Controller, ModuleConfig, Router,
                    Header, DialogRegion ){
                'use strict';

                // Extend the App prototype
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

                App.on('initialize:before', function(){
                    // Initialize App modules
                    App.Controller = new Controller( ModuleConfig );
                    App.Router = new Router( App.Controller );
                    
                    // Define App Regions
                    App.addRegions({
                        headerRegion: '#header-region',
                        contentRegion: '#main-region',
                        dialogRegion: DialogRegion.extend({
                            el: '#dialog-region'
                        })
                    });
                });
                
                App.addInitializer(function(){
                    // Require all other modules
                    require( App.Controller.getPaths() , function(){
                        Backbone.history.start({ pushState: true, root: '/' });
                    });
                });

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