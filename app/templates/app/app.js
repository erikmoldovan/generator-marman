require(['../config'],
    function() {
        'use strict';

        require([
                'underscore',
                'jquery', 
                'backbone', 
                'marionette',

                './controller.app',
                './modules/shared/shared.router',
                'json!./config.app.json',

                './global/regions/header/controller.header',
                './global/regions/region.dialog'
            ],

            function( _, $, Backbone, Marionette,
                    SharedController, SharedRouter, ModuleConfig,
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
                
                App.addInitializer(function(){
                    // Initialize App modules
                    App.Controller = new SharedController( ModuleConfig );
                    App.Router = new SharedRouter( App.Controller );
                    
                    // Define App Regions
                    App.addRegions({
                        headerRegion: '#header-region',
                        contentRegion: '#main-region'
                        // dialogRegion: DialogRegion.extend({
                        //     el: '#dialog-region'
                        // })
                    });

                    // Require all other modules
                    require( App.Controller.getPaths() , function(deferred){
                        deferred.done(function(){
                            Backbone.history.start({ pushState: true, root: '/' });
                        });
                    });
                });

                App.on('initialize:after', function(){
                    console.log('[GLOBAL] App started');
                });

                // Start the App
                App.start();
            }
        );
    }
);