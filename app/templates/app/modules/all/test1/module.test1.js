define([],

    function( ){
        'use strict';

        App.module( 'Test1', function( Test1 ) {
            Test1.on( 'start', function(){
                App.EventManager.trigger('module:test1:loaded');
            });
        });

        return App.Test1;
    }
);