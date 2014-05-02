define([

    ],

    function( ){
        'use strict';

        App.module( 'Sub1', function( Sub1 ) {
            Sub1.on( 'start', function(){
                console.log('[MODULE] Sub 1 loaded');
            });
        });

        return App.Example.Sub1;
    }
);