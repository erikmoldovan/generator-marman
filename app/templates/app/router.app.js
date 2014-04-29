define([
        'shared.router'
	],

    function( Router ){
        'use strict';

        return Router.extend({
            controller: {
                // Format: 'load_module_' + module.get('url')
                load_module_example: function(){
                    console.log('[ROUTE] Example fired');
                },

                default: function(){
                    console.log('[ROUTE] Default fired');
                }
            }
        });
    }
);