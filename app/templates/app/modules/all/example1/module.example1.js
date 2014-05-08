/*
 *  Example1 module
 *
 *  This module shows the most basic configuration: A module with no sub-modules.
 *  When you've reached the end of the road, you don't need a Router, and you don't need
 *  a Controller that extends from shared.controller. You just need the Module, a Marionette.Controller,
 *  and the views and templates for the module.
 *
 */

define([
        './controller.example1'
    ],

    function( Controller ){
        'use strict';

        App.module( 'Example1', function( Example1 ) {

            // Instantiate Module components
            this.Controller = new Controller();
            this.Controller.loadListeners();

            Example1.on( 'start', function(){
                console.log('[MODULE] Example1 loaded');
            });
        });

        return App.Example1;
    }
);