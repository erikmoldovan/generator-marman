define([
		'shared.modulemanager',
		'json!./config.module.test1.json'
	],

    function( ModuleManager, ModulesList ){
        'use strict';

        App.module( 'Test1', function( Test1 ) {
            Test1.on( 'start', function(){
            	this.ModuleManager = new ModuleManager(ModulesList);

                App.EventManager.trigger('module:test1:loaded');
            });
        });

        return App.Test1;
    }
);