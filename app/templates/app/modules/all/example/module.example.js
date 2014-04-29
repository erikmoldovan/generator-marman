define([
		'shared.modulemanager',

		'json!./config.module.example.json'
	],

    function( ModuleManager, ModuleConfig ){
        'use strict';

        App.module( 'Example', function( Example ) {
            Example.on( 'start', function(){
            	this.ModuleManager = new ModuleManager(ModuleConfig);

                var controller = {
                    // Format: 'load_module_' + module.get('url')
                    load_module_example_suba: function(){
                        console.log('[ROUTE] Sub A fired');
                    },

                    load_module_example_subb: function(){
                        console.log('[ROUTE] Sub B fired');
                    }
                };

                console.log('[MODULE] Example loaded');
            });
        });

        return App.Example;
    }
);