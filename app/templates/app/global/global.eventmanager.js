define([
        'underscore',
        'backbone',
        'marionette'
    ],

    function( _, Backbone, Marionette ){
        'use strict';

        // I really don't like this. I wish there was a way to do all these bindings without chaining the calls
        var EventManager = new Backbone.Wreqr.EventAggregator();

        EventManager
            .on('global:app:start', function(){
                console.log('[GLOBAL] App started');
            })
            .on('global:modulemanager:loaded', function(){
                console.log('[GLOBAL] ModuleManager loaded');
            })
            // .on('global:environment:loaded', function(){
            //     console.log('[GLOBAL] Environment loaded');
            // })
            .on('global:router:loaded', function(){
                console.log('[GLOBAL] Router loaded');
            })
            .on('module:test1:loaded', function(){
                console.log('[MODULE] Test1 loaded');
            })
            .on('module:test2:loaded', function(){
                console.log('[MODULE] Test2 loaded');
            })
            .on('route:test1:fired', function(){
                console.log('[ROUTE] Test1 fired');
            })
            .on('route:test2:fired', function(){
                console.log('[ROUTE] Test2 fired');
            })
            .on('route:default:fired', function(){
                console.log('[ROUTE] Default fired');
            })
            ;

        // console.log('[GLOBAL] EventManager loaded');

        return EventManager;
    }
);