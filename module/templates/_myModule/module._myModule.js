/*
 * Loan Delivery module definition
 */

define(function(require) {
    'use strict';

    var $ = require('jquery'),

        SharedModule = require('modules/shared/shared.module'),
        ModuleConfig = require('json!./config.commitments.json');

    return App.module('MyModule', {
        moduleClass: SharedModule,
        moduleConfig: ModuleConfig
    });
});