define([
        'shared.router'
	],

    function( Router ){
        'use strict';

        return Router.extend({
            controller: {
                // Format: 'load_module_' + module.get('url')
                load_module_test1: function(){
                    App.EventManager.trigger('route:test1:fired');
                },

                load_module_test2: function(){
                    App.EventManager.trigger('route:test2:fired');
                },

                default: function(){
                    App.EventManager.trigger('route:default:fired');
                }
            }
        });
    }
);