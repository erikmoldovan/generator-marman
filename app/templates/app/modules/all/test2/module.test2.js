define([],

    function( ){
        'use strict';

        App.module( 'Test2', function( Test2 ) {
            Test2.on( 'start', function(){
                App.EventManager.trigger('module:test2:loaded');
            });
        });

        return App.Test2;
    }
);