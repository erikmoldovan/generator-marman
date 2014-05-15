/*
 *  Example2 module
 *
 *  This module shows a configuration with sub-modules
 *
 */

define(function(require){
    'use strict';

    var SharedModule = require('modules/shared/shared.module'),
        ModuleConfig = require('json!./config.example1.json');

    return App.module('Example1', {
        moduleClass: SharedModule,
        moduleConfig: ModuleConfig
    });
});