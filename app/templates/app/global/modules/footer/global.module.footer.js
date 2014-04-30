define([

    ],

    function( ){
        'use strict';

        App.module( 'Footer', function( Footer ) {
            Footer.on( 'start', function(){
                console.log('[GLOBAL][MODULE] Footer loaded');
            });
        });

        return App.Footer;
    }
);