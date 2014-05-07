/*
 *  Example1 module
 *
 *  This module shows the most basic configuration: A module with no sub-modules
 *
 */

define([
        './controller.example1',
        'modules/shared/shared.router',

        'json!./config.module.example1.json'
    ],

    function( Controller, Router, ModuleConfig ){
        'use strict';

        App.module( 'Example1', function( Example1 ) {
            Example1.on( 'start', function(){
                // Instantiate Module components
                this.Controller = new Controller( ModuleConfig );
                this.Router = new Router( this.Controller );

                console.log('[MODULE] Example1 loaded');
            });
        });

        return App.Example1;
    }
);