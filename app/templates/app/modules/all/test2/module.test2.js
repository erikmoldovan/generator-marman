define([
        'App'
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

            //     iniitalizeNav: function(){
            //         // Handles Nav and Subnav population
            //         Main.Header.Nav.Controller.listItems();
            //         Main.Header.Nav.Controller._returnActive('/pools'); // Need dynamic
            //         Main.Header.Subnav.Controller.listItems();
            //     }
            // };

            Test2.on( 'start', function(){
                // API.initializeLayout();
                // API.iniitalizeNav();
                console.log('test 2 module loaded');
            });
        });

        return App.Test2;
    }
);