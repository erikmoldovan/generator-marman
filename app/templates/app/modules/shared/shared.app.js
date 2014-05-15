/*
 *	Shared app definition
 */

define(function(require){
	'use strict';

	var _ = require('underscore'),
        $ = require('jquery'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),

        SharedRouter = require('./shared.router'),

        Header = require('global/regions/header/controller.header'),
        Dialog = require('global/regions/region.dialog');

     return Marionette.Application.extend({
     	start: function(){
     		// Initialize App modules
            // App.Router = new Router( ModuleConfig );

            var baseConfig = new Backbone.Model( this.moduleConfig.base );
            var modulesList = new Backbone.Collection( this.moduleConfig.modules );

            var paths = modulesList.map(function(model){
                return model.get('load').path;
            });

            // Require all other modules
            require(paths, function(module){
                console.log(module);

                // module.deferred.done(function(){
                //     console.log('[GLOBAL] History started');

                //     Backbone.history.start({ pushState: true, root: '/' });
                // });
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