define([

    ],

    function( ){
        'use strict';

        App.module( 'Sub2', function( Sub2 ) {
            Sub2.on( 'start', function(){
                console.log('[MODULE] Sub 2 loaded');
            });
        });

        return App.Example.Sub2;
    }
);