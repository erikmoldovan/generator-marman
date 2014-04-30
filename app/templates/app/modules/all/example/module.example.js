define([
        'shared.modulemanager'
    ],

    function( ModuleManager ){
        'use strict';

        App.module( 'Example', function( Example ) {
            Example.on( 'start', function(){
                var moduleConfig = [
                    {
                        url: "example/suba",
                        path: "modules/all/example/sub/module.suba",
                        module: true,
                        route: "load_module_example_suba",
                        callback: function(){
                            console.log('[ROUTE] Sub A fired');
                        }
                    },{
                        url: "example/subb",
                        path: "modules/all/example/sub/module.subb",
                        module: true,
                        route: "load_module_example_subb",
                        callback: function(){
                            console.log('[ROUTE] Sub B fired');
                        }
                    }
                ];

                this.ModuleManager = new ModuleManager(moduleConfig);

                console.log('[MODULE] Example loaded');
            });
        });

        return App.Example;
    }
);