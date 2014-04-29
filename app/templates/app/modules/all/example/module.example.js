define([
		'shared.modulemanager',
        './router.example',

		'json!./config.module.example.json'
	],

    function( ModuleManager, Router, ModuleConfig ){
        'use strict';

        App.module( 'Example', function( Example ) {
            Example.on( 'start', function(){
            	this.ModuleManager = new ModuleManager(ModuleConfig);
                this.Router = new Router(this);

                console.log('[MODULE] Example loaded');
            });
        });

        return App.Example;
    }
);