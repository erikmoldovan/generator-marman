define([ 
        'underscore', 
        'jquery', 
        'backbone', 
        'marionette',
        'config/regions/dialog',
        'json!fixtures/modules.json'
    ],

    function( _, $, Backbone, Marionette, DialogRegion, modulesList ) {
        'use strict';

        var App = new Marionette.Application();
        
        // Specify the application region
        App.addRegions({
            headerRegion: '#header-region', // Banner area, where menu, search and utitlities will live 
            mainRegion: '#main-region', // Main Application Layout Region
            dialogRegion: DialogRegion.extend({
                el: '#dialog-region' // Application Dialog Region
            })    
        });

        // Initializer Handler
        App.on('initialize:after', function(){
            // Pulls in the list of modules dynamically from JSON, as filtered by permissions
            var modulesArray = [];

            _.each(modulesList, function(module){
                modulesArray.push(module.path);
            });

            require(modulesArray, function(){
                // Kick off Backbone.history to resolve current url
                Backbone.history.start({ pushState: true, root: '/' });
            }); 
        });

        return App;
    }
);