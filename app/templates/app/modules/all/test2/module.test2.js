define([
		'shared.modulemanager',
		'json!./config.module.test2.json'
	],

    function( ModuleManager, ModulesList ){
        'use strict';

        App.module( 'Test2', function( Test2 ) {
            Test2.on( 'start', function(){
            	this.ModuleManager = new ModuleManager(ModulesList);

                App.EventManager.trigger('module:test2:loaded');
            });
        });

        return App.Test2;
    }
);