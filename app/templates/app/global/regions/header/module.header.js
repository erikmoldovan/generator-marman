define([
        './layout.header'
    ],

    function( Layout ){
        'use strict';

        App.module( 'Header', function( Header ) {
            Header.on( 'start', function(){

                // Controller
                
                // Router

                // App.SubNavCollection = this.ModuleManager.getList();
                // App.headerRegion.show(new HeaderView());

                console.log('[MODULE] Header loaded');
            });
        });

        return App.Example;
    }
);