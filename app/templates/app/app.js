define([
        'underscore',
        'jquery', 
        'backbone', 
        'marionette',

        'region.dialog',
        'app.environment',
        'app.eventmanager',
        'app.modulemanager',
        'app.router'
    ],

    function( _, $, Backbone, Marionette, DialogRegion, Environment, EventManager, ModuleManager, Router ){
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
        App.Environment = new Environment; // Initializes environment defined model
        App.ModuleManager = new ModuleManager; // Initialize global module manager
        App.Router = new Router; // Initializes top level router

        // Application initialization handler
        App.on('initialize:after', function(){
            var modules = App.ModuleManager.retrievePaths();

            require(modules, function(){
                // Kick off Backbone.history to resolve current url
                Backbone.history.start({ pushState: true, root: '/' });
            });

            App.EventManager.trigger('global:app:start');
        });

        return App;
    }
);