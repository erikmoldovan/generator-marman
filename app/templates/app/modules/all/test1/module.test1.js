define([
        'App'
    ],

    function( App ){
        'use strict';

        App.module( 'Test1', function( Test1 ) {

            /**** NEED TO ACTUALLY CREATE SCAFFOLD ****/
            // var API = {
            //     initializeLayout: function() {
            //         // Handles the overall Header layout
            //         var headerLayout = new HeaderLayout();
            //         ld.headerRegion.show( headerLayout );

            //         Main.headerLayout = headerLayout;
            //     },
            // };

            Test1.on( 'start', function(){
                // API.initializeLayout();
                console.log('test 1 module loaded');
            });
        });

        return App.Test1;
    }
);