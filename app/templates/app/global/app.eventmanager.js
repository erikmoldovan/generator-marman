define([
        'marionette'
    ],

    function( Marionette ){
        'use strict';

        var EventManager = function(){
            console.log('[GLOBAL] EventManager loaded');

            App.vent.on('test_event', function(){
                console.log('[EVENT] Test event fired');
            });  
        };

        return EventManager;
    }
);