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

            //     iniitalizeNav: function(){
            //         // Handles Nav and Subnav population
            //         Main.Header.Nav.Controller.listItems();
            //         Main.Header.Nav.Controller._returnActive('/pools'); // Need dynamic
            //         Main.Header.Subnav.Controller.listItems();
            //     }
            // };

            Test1.on( 'start', function(){
                // API.initializeLayout();
                // API.iniitalizeNav();
                console.log('test 1 module loaded');
            });
        });

        return App.Test1;
    }
);