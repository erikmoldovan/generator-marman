/*
 *  Example2 module
 *
 *  This module shows a configuration with sub-modules
 *
 */

define(function(require){
    'use strict';

    var $ = require('jquery'),

        Router = require('modules/shared/shared.router'),
        ModuleConfig = require('json!./config.example.json');

    var Module = function(){
        var deferred = $.Deferred();

        // Instantiate Module components
        var router = new Router( ModuleConfig );

        require( router.getPaths() , function(data){
            deferred.resolve(data);

            console.log('[MODULE] Example loaded');
        });

        return deferred.promise();
    }

    return Module();
});