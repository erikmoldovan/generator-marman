define([
    'backbone',
    'marionette'
  ],

  function(Backbone, Marionette){
    'use strict';

    var Router = Marionette.AppRouter.extend({
      appRoutes: {
        "test1" : "loadTest1",
        "test2" : "loadTest2",
        "*path" : "default"
      },
      controller: {
        loadTest1: function(){
          console.log('test 1 route loaded');
        },

        loadTest2: function(){
          console.log('test 2 route loaded');
        },

        default: function(){
          console.log('default route loaded');
        }
      }
    });

    return Router;
  }
);