define([
    'backbone',
    'marionette'
  ],

  function(Backbone, Marionette){
    'use strict';

    // var Controller = Marionette.Controller.extend({
    //   loadTest1: function(){
    //     console.log('test 1 route loaded');
    //   },

    //   loadTest2: function(){
    //     console.log('test 2 route loaded');
    //   }
    // });

    var Controller = {
      loadTest1: function(){
        console.log('test 1 route loaded');
      },

      loadTest2: function(){
        console.log('test 2 route loaded');
      }
    };

    var Router = Marionette.AppRouter.extend({
      controller: Controller,
      appRoutes: {
        "test1": "loadTest1",
        "test2": "loadTest2"
      },
    });

    return Router;
  }
);