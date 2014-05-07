/*
 *  Example2 module
 *
 *  This module shows a configuration with sub-modules
 *
 */

define([
        './controller.example2',
        'modules/shared/shared.router',

        'json!./config.module.example2.json'
    ],

    function( Controller, Router, ModuleConfig ){
        'use strict';

        App.module( 'Example2', function( Example2 ) {
            Example2.on( 'start', function(){

                this.Controller = new Controller( ModuleConfig );
                this.Router = new Router( this.Controller );

                console.log('[MODULE] Example2 loaded');
            });
        });

        return App.Example2;
    }
);