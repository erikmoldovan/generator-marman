/*
 *  Example : Sub2 sub-module
 *
 *  This module shows the most basic configuration: A module with no sub-modules.
 *  When you've reached the end of the road, you don't need a Router, and you don't need
 *  a Controller that extends from shared.controller. You just need the Module, a Marionette.Controller,
 *  and the views and templates for the module.
 *
 */

define([
        './controller.sub2'
    ],

    function( Controller ){
        'use strict';

        // Instantiate Module components
        var Controller = new Controller();

        console.log('[MODULE] Example::Sub2 started');
    }
);