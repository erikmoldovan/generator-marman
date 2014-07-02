/*
 * App module definition
 */

define(function(require){
    'use strict';

    var _ = require('underscore'),
        $ = require('jquery'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),

        Environment = require('global/global.environment'),
        Cache = require('global/global.cache'),
        User = require('global/global.user'),
        SharedLoader = require('modules/shared/shared.loader'),

        Header = require('global/regions/header/controller.header'),
        Main = require('global/regions/region.main'),
        Dialog = require('global/regions/region.dialog'),
        Footer = require('global/regions/footer/controller.footer');

    return Marionette.Application.extend({
        start: function( options ){
            // Load initial App components
            this.Environment = new Environment();
            this.Cache = new Cache();
            this.User = new User();

            // Instantiate the Module Loader component
            var loader = new SharedLoader({
                moduleConfig: options.moduleConfig
            });

            // Define App Regions
            this.addRegions({
                headerRegion: '#header-region',
                mainRegion: Main.extend({
                    el: "#main-region"
                }),
                footerRegion: '#footer-region',
                dialogRegion: Dialog.extend({
                    el: '#dialog-region'
                })
            });

            // Populate the App regions with views
            this.Header = new Header( loader.getModulesList() );
            this.Footer = new Footer();

            var self = this;

            // Require all modules
            require( loader.getPaths(), function( /* arguments */ ){
                 // The arguments array is an implicit object returned by Javascript in this situation.
                 // It contains the modules loaded by require, allowing us to set up the Synchronized loading system later on.
                var promises = [],
                    defaultRoute,
                    root = self.Environment.getRoot();

                // Loop through the implicitly defined arguments array that requireJS populates
                _.each(arguments, function( module, i ){
                    var flags = module.options.moduleConfig.base.flags || {};

                    // If first in list, or has a default flag, set as the default route placeholder
                    if( i === 0 || flags.default ) defaultRoute = module.Router.getDefaultRoute();

                    promises.push( module.deferred ); // And push the module's deferred object to the promises array
                });

                // When all promises in the array are resolved, then start the global router
                $.when.apply( $, promises).done( function(){
                    // Start the global router
                    console.log('[GLOBAL] History started');
                    Backbone.history.start({ pushState: true, root: root });

                    // If the app loads at the base URL, fire the default route of the default (first) module
                    if(App.getCurrentRoute() == "") defaultRoute();
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