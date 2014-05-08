/*
 *  Header global module
 *
 *  This is the header. It displays the topbar section, the nav bar section and the subnav
 *  bar section.
 *
 */

define([
        './controller.header'
    ],

    function( Controller ){
        'use strict';

        App.module( 'Header', function( Header ) {

            // Instantiate Module components
            // this.Controller = new Controller();

            Header.on( 'start', function(){
                console.log('[MODULE] Header loaded');
            });
        });

        return App.Header;
    }
);