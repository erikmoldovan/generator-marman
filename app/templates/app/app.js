define([
        'underscore', 
        'jquery', 
        'backbone', 
        'marionette',
        'global/app.region.dialog',
        'json!modules.json'
    ],

    function( _, $, Backbone, Marionette, DialogRegion, ModulesList ){
        'use strict';

        var LDApp = new Marionette.Application();

        /*
         * Define the Application Regions
         */
        LDApp.addRegions({
            headerRegion: '#header-region',
            mainRegion: '#main-region',
            footerRegion: '#footer-region',
            dialogRegion: DialogRegion.extend({
                el: '#dialog-region' // Application Dialog / Modal
            })
        });

        /*
         * Application initialization handler
         */
        LDApp.on('initialize:after', function(){
            // Pulls in the list of modules dynamically from JSON, as filtered by permissions
            var modulesArray = [];
            var baseModulesURL = 'modules/all/'; /**** NEEDS TO BE ABSTRACTED INTO APP.MODULES ****/

            console.log(ModulesList);

            _.each(ModulesList, function(module){
                modulesArray.push(baseModulesURL + module.path);
            });

            console.log(modulesArray);

            require(modulesArray, function(){
                // Kick off Backbone.history to resolve current url
                Backbone.history.start({ pushState: true, root: '/' });
            });
        });

        return LDApp;
    }
);