define([

    ],

    function( ){
        'use strict';

        App.module( 'Header', function( Header ) {
            Header.on( 'start', function(){
                console.log('[MODULE] Header loaded');
            });
        });

        return App.Header;
    }
);