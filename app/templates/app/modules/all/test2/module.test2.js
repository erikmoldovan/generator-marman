define([
        'app.ld'
    ],

    function( LDApp ){
        'use strict';

        LDApp.module( 'Test2', function( Test2 ) {

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
                console.log('test 2 module loaded');
            });
        });

        return LDApp.Test2;
    }
);