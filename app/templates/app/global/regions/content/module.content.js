define([
        
    ],

    function(  ){
        'use strict';

        App.module( 'Content', function( Content ) {
            Content.on( 'start', function(){
                // this.ModuleManager = new ModuleManager(ModuleConfig);
                // this.Router = new Router(this); // Initialize the router

                // App.SubNavCollection = this.ModuleManager.getList();
                // App.headerRegion.show(new HeaderView());

                console.log('[MODULE] Content loaded');
            });
        });

        return App.Content;
    }
);