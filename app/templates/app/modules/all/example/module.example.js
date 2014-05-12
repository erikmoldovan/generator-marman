/*
 *  Example2 module
 *
 *  This module shows a configuration with sub-modules
 *
 */

define([
        'jquery',

        './controller.example',
        'modules/shared/shared.router',
        'json!./config.example.json'
    ],

    function( $, SharedController, SharedRouter, ModuleConfig ){
        'use strict';

        var deferred = $.Deferred();

        // Instantiate Module components
        var Controller = new SharedController( ModuleConfig );
        var Router = new SharedRouter( Controller );

        require( Controller.getPaths() , function(data){
            deferred.resolve(data);

            console.log('[MODULE] Example loaded');
        });

        return deferred.promise();
    }
);