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

        App.Router = new Router();
        App.ModuleManager = new ModuleManager();

        // Application initialization handler
        App.on('initialize:after', function(){
            // Pulls in the list of modules dynamically from JSON, as filtered by permissions
            var modulesArray = [];
            var baseModulesURL = 'modules/all/'; /**** NEEDS TO BE ABSTRACTED INTO APP.MODULES ****/

            // _.each(ModulesList, function(module){
            //     modulesArray.push(baseModulesURL + module.path);
            // });

            require(modulesArray, function(){
                // Kick off Backbone.history to resolve current url
                Backbone.history.start({ pushState: true, root: '/' });
            });
        });

        return App;
    }
);