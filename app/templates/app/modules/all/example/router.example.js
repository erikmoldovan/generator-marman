define([
        'shared.router'
	],

    function( Router ){
        'use strict';

        return new Router({
            controller: {
                // Format: 'load_module_' + module.get('url')
                load_module_example_suba: function(){
                    console.log('[ROUTE] Sub A fired');
                },

                load_module_example_subb: function(){
                    console.log('[ROUTE] Sub B fired');
                },

                default: function(){
                    console.log('[ROUTE] Sub Default fired');
                }
            }
        });
    }
);