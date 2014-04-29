define([
		'shared.modulemanager',
        './router.test2',
        
		'json!./config.module.test2.json'
	],

    function( ModuleManager, Router, ModulesList ){
        'use strict';

        App.module( 'Test2', function( Test2 ) {
            Test2.on( 'start', function(){
            	this.ModuleManager = new ModuleManager(ModulesList);
                this.Router = new Router(this);

                App.EventManager.trigger('module:test2:loaded');
            });
        });

        return App.Test2;
    }
);