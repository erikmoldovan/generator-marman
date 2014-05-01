define([
        'shared.modulemanager',
        'shared.router',

        'global/regions/header/layout.header'
    ],

    function( ModuleManager, Router, HeaderView ){
        'use strict';

        App.module( 'Example', function( Example ) {
            Example.on( 'start', function(){
                var modules = {
                    config: {
                        baseURL: "example",
                        basePath: "modules/all/example",
                        baseRoute: "load_module_example"
                    },
                    list: [
                        {
                            title: "Sub 1",
                            url: "sub1",
                            path: "sub1/module.sub1",
                            route: "sub1"
                        },{
                            title: "Sub 2",
                            url: "sub2",
                            path: "sub2/module.sub2",
                            route: "sub2",
                            default: true
                        }
                    ]
                };

                this.ModuleManager = new ModuleManager(modules);
                this.Router = new Router(this);

                App.headerRegion.show(new HeaderView(this));
                
                console.log('[MODULE] Example loaded');
            });
        });

        return App.Example;
    }
);