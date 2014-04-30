define([

    ],

    function( ){
        'use strict';

        App.module( 'Header', function( Header ) {
            Header.on( 'start', function(){
                console.log('[GLOBAL][MODULE] Header loaded');
            });
        });

        return App.Header;
    }
);