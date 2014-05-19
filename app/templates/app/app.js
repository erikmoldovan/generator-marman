/*
 * App module definition
 */

define(function(require){
    'use strict';

    var _ = require('underscore'),
        $ = require('jquery'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),

        SharedLoader = require('modules/shared/shared.loader'),

        Header = require('global/regions/header/controller.header'),
        Dialog = require('global/regions/region.dialog');

    return Marionette.Application.extend({
        start: function( options ){
            // Instantiate the Module Loader component
            var loader = new SharedLoader({
                moduleConfig: options.moduleConfig
            });

            // Define App Regions
            this.addRegions({
                headerRegion: '#header-region',
                contentRegion: '#main-region'
                // dialogRegion: Dialog.extend({
                //     el: '#dialog-region'
                // })
            });

            this.Header = new Header( loader.getModulesList() );

            // Require all modules
            require( loader.getPaths(), function( /* arguments */ ){
                 // The arguments array is an implicit object returned by Javascript in this situation.
                 // It contains the modules loaded by require, allowing us to set up the Synchronized loading system later on.

                var promises = [];
                var defaultRoute = arguments[0].Router.controller; // Default route is always equal to the first defined module's controller

                // Loop through the implicitly defined arguments array that require populates
                for( var i = 0; i < arguments.length; i++ ){
                    promises.push( arguments[i].deferred ); // And push the module's deferred object to the promises array
                }

                // When all promises in the array are resolved, then start the global router
                $.when.apply( $, promises).done( function(){
                    // Start the global router
                    console.log('[GLOBAL] History started');
                    Backbone.history.start({ pushState: true, root: '/' });

                    // If the app loads at the base URL, fire the default route of the default (first) module
                    if(App.getCurrentRoute() == "") defaultRoute.default();
                });
            });

            console.log('[GLOBAL] App started');
        },

        // Adds the global router's navigate function to the App prototype
        navigate: function( route, options ) {
            options || ( options = {} );

            Backbone.history.navigate(route, options);
        },

        // Adds the global router's URL fragment function to the App prototype
        getCurrentRoute: function() {
            return Backbone.history.fragment;
        }
    });
});