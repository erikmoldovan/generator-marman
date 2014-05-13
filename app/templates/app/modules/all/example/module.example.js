/*
 *  Example2 module
 *
 *  This module shows a configuration with sub-modules
 *
 */

define(function(require){
    'use strict';

    var $ = require('jquery'),

        Controller = require('./controller.example'),
        Router = require('modules/shared/shared.router'),
        ModuleConfig = require('json!./config.example.json');

    var Module = function(){
        var deferred = $.Deferred();

        // Instantiate Module components
        var controller = new Controller( ModuleConfig ),
            router = new Router( controller );

        require( controller.getPaths() , function(data){
            deferred.resolve(data);

            console.log('[MODULE] Example loaded');
        });

        return deferred.promise();
    }

    return Module();
});