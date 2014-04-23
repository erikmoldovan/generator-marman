define([
    'backbone',
    'marionette'
  ],

  function(Backbone, Marionette){
    'use strict';

    var Router = Marionette.AppRouter.extend({
      initialize: function(options){
        
      },
      appRoutes: {
        "test1" : "loadTest1",
        "test2" : "loadTest2",
        "*path" : "default"
      },
      controller: {
        loadTest1: function(){
          console.log('[ROUTE] Test1 route fired');
        },

        loadTest2: function(){
          console.log('[ROUTE] Test2 route fired');
        },

        default: function(){
          console.log('[ROUTE] Default route fired');
        }
      }
    });

    return Router;
  }
);