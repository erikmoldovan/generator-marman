define([
        'shared.router'
	],

    function( Router ){
        'use strict';

        return Router.extend({
            controller: {
                // Format: 'load_module_' + module.get('url')
                load_module_test1_stuffa: function(){
                    console.log('stuff');
                },

                load_module_test1_stuffb: function(){
                    console.log('other stuff');
                },

                default: function(){
                    console.log('default');
                }
            }
        });
    }
);