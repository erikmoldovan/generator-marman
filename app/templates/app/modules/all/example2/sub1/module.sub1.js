/*
 *  Example2 : Sub1 sub-module
 *
 *  This module shows the most basic configuration: A module with no sub-modules.
 *  When you've reached the end of the road, you don't need a Router, and you don't need
 *  a Controller that extends from shared.controller. You just need the Module, a Marionette.Controller,
 *  and the views and templates for the module.
 *
 */

define([
        './controller.sub1'
    ],

    function( Controller ){
        'use strict';

        App.module( 'Example2.Sub1', function( Sub1 ) {

            // Instantiate Module components
            this.Controller = new Controller();
            this.Controller.loadListeners();

            var self = this;

            Sub1.on( 'start', function(){
                console.log('[MODULE] Example2:Sub1 started');
            });
        });

        return App.Example2.Sub1;
    }
);