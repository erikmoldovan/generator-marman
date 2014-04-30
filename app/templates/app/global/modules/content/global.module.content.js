define([

    ],

    function( ){
        'use strict';

        App.module( 'Content', function( Content ) {
            Content.on( 'start', function(){
                console.log('[GLOBAL][MODULE] Content loaded');
            });
        });

        return App.Content;
    }
);