define([
        'underscore', 
        'jquery', 
        'backbone', 
        'marionette',
        'global/app.region.dialog',
        'json!modules.json',
        'global/app.router'
    ],

    function( _, $, Backbone, Marionette, DialogRegion, ModulesList, Router ){
        'use strict';

        // Globalization
        window.LDApp = new Marionette.Application();

        // Define the Application Regions
        LDApp.addRegions({
            headerRegion: '#header-region',
            mainRegion: '#main-region',
            footerRegion: '#footer-region',
            dialogRegion: DialogRegion.extend({
                el: '#dialog-region' // Application Dialog / Modal
            })
        });

        LDApp.Router = new Router();

        // Application initialization handler
        LDApp.on('initialize:after', function(){
            // Pulls in the list of modules dynamically from JSON, as filtered by permissions
            var modulesArray = [];
            var baseModulesURL = 'modules/all/'; /**** NEEDS TO BE ABSTRACTED INTO APP.MODULES ****/

            _.each(ModulesList, function(module){
                modulesArray.push(baseModulesURL + module.path);
            });

            require(modulesArray, function(){
                // Kick off Backbone.history to resolve current url
                Backbone.history.start({ pushState: true, root: '/' });
            });
        });

        return LDApp;
    }
);