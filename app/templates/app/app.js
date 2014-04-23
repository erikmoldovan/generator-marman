define([
        'underscore',
        'jquery', 
        'backbone', 
        'marionette',
        'global/app.modulemanager',
        'global/app.router',
        'global/region.dialog'
    ],

    function( _, $, Backbone, Marionette, ModuleManager, Router, DialogRegion ){
        'use strict';

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

        App.ModuleManager = new ModuleManager;
        App.Router = new Router;

        // Application initialization handler
        App.on('initialize:after', function(){
            require(App.ModuleManager.returnModulePaths(), function(){
                // Kick off Backbone.history to resolve current url
                Backbone.history.start({ pushState: true, root: '/' });
            });
        });

        console.log('[GLOBAL] App started');

        return App;
    }
);