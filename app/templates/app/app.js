/*
 * App module definition
 */

define(function(require){
    'use strict';

    var SharedApp = require('modules/shared/shared.app'),
        ModuleConfig = require('json!config.app.json');

    return SharedApp.extend({
        moduleConfig: ModuleConfig
    });
});