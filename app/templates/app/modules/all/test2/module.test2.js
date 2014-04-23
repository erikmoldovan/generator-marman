define([
        'app'
    ],

    function( App ){
        'use strict';

        App.module( 'Test2', function( Test2 ) {

            /**** NEED TO ACTUALLY CREATE SCAFFOLD ****/
            // var API = {
            //     initializeLayout: function() {
            //         // Handles the overall Header layout
            //         var headerLayout = new HeaderLayout();
            //         ld.headerRegion.show( headerLayout );

            //         Main.headerLayout = headerLayout;
            //     },
            // };

            Test2.on( 'start', function(){
                // API.initializeLayout();
                console.log('[MODULE] Test2 loaded');
            });
        });

        return App.Test2;
    }
);