define([,
    'underscore',
    'backbone',
    'marionette',
    'json!../modules.json',
  ],

  function( _, Backbone, Marionette, ModuleList ){
    'use strict';

    var ModuleManager = function(options){
    	console.log('module manager loaded');
    }

    return ModuleManager;
  }
);