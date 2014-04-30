define([
        'shared.modulemanager'
    ],

    function( ModuleManager ){
        'use strict';

        App.module( 'Example', function( Example ) {
            Example.on( 'start', function(){
                var config = [
                    {
                        title: "Sub Example A",
                        path: "modules/all/example/sub/module.suba",
                        url: "example/suba",
                        route: "load_module_example_suba",
                        callback: function(){
                            console.log('[ROUTE] Sub A fired');
                        }
                    },{
                        title: "Sub Example B",
                        path: "modules/all/example/sub/module.subb",
                        url: "example/subb",
                        route: "load_module_example_subb",
                        callback: function(){
                            console.log('[ROUTE] Sub B fired');
                        }
                    }
                ];

                this.ModuleManager = new ModuleManager(config);

                console.log('[MODULE] Example loaded');
            });
        });

        return App.Example;
    }
);