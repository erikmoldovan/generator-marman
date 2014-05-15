/*
 * App module definition
 */

define(function(require){
    'use strict';

    var _ = require('underscore'),
        $ = require('jquery'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),

        SharedLoader = require('modules/shared/shared.loader'),

        Header = require('global/regions/header/controller.header'),
        Dialog = require('global/regions/region.dialog');

    return Marionette.Application.extend({
     	start: function(options){
            var loader = new SharedLoader({
            	moduleConfig: options.moduleConfig
            });

            // Require all other modules
            require(loader.paths, function(module, x){
                // console.log(module);
                // console.log(x);

                x.deferred.done(function(){
                    console.log('[GLOBAL] History started');

                    Backbone.history.start({ pushState: true, root: '/' });
                });
            });

            // Define App Regions
            this.addRegions({
                headerRegion: '#header-region',
                contentRegion: '#main-region'
                // dialogRegion: Dialog.extend({
                //     el: '#dialog-region'
                // })
            });

            console.log('[GLOBAL] App started');
     	},

     	navigate: function( route, options ) {
            options || (options = {});

            Backbone.history.navigate(route, options);
        },

        getCurrentRoute: function() {
            return Backbone.history.fragment;
        }
	});
});