/*
 * App module definition
 */

define(function(require){
    'use strict';

    var _ = require('underscore'),
        $ = require('jquery'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),

        Controller = require('./controller.app'),
        Router = require('./modules/shared/shared.router'),
        ModuleConfig = require('json!config.app.json'),

        Header = require('./global/regions/header/controller.header'),
        Dialog = require('./global/regions/region.dialog');

    var app = {
        start: function(){
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
                App.Controller = new Controller( ModuleConfig );
                App.Router = new Router( App.Controller );
                
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

            App.start();
        }
    }

    return app;
});