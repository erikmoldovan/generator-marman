define([
        'shared.modulemanager',
        'shared.router',

        'global/regions/header/layout.header',

        'json!./config.module.example.json'
    ],

    function( ModuleManager, Router, HeaderView, ModuleConfig ){
        'use strict';

        App.module( 'Example', function( Example ) {
            Example.on( 'start', function(){
                this.ModuleManager = new ModuleManager(ModuleConfig);
                this.Router = new Router(this); // Initialize the router

                var modules = this.ModuleManager.retrievePaths();
                var self = this;

                require(modules, function(){
                    App.headerRegion.show(new HeaderView(self)); // Probably shouldnt do module linking like this....
                });

                console.log('[MODULE] Example loaded');
            });
        });

        return App.Example;
    }
);