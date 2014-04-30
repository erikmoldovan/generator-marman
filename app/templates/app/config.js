require.config({
    paths: {
        //
        // === Global libraries ===

        // Make this easier to access
        'libs': '/app/libs',

        // Underscore functionality provided by lo-dash
        'underscore': 'libs/lodash/dist/lodash.underscore',

        // jQuery
        'jquery': 'libs/jquery/jquery',

        // Fastclick
        'fastclick': 'libs/fastclick/lib/fastclick',

        // Backbone
        'backbone': 'libs/backbone/backbone',

        // Marionette
        'marionette': 'libs/marionette/lib/backbone.marionette',

        // Lunr - Full Text Search.
        // Note: Dependency for backgrid filter
        'lunr': 'libs/lunr.js/lunr',

        // Backbone.picky
        'backbone.picky': 'libs/backbone.picky/src/backbone.picky',
        
        // Backgrid Pageable
        'backbone.pageable': 'libs/backbone-pageable/lib/backbone-pageable',

        // Foundation Module
        'foundation': 'libs/foundation/js/foundation',

        // Foundation Tooltip
        'foundation.tooltip': 'libs/foundation/js/foundation/foundation.tooltip',

        // Foundation Dropdown
        'foundation.dropdown': 'libs/foundation/js/foundation/foundation.dropdown',

        // Backgrid Component
        'backbone.backgrid': 'libs/backgrid/lib/backgrid',

        // Backgrid Paginator
        'backbone.backgrid.paginator': 'libs/backgrid-paginator/backgrid-paginator',

        // Backgrid Select All Extension
        'backbone.backgrid.selectall': 'libs/backgrid-select-all/backgrid-select-all',

        // Backgrid Filter
        'backbone.backgrid.filter': 'libs/backgrid-filter/backgrid-filter',

        // Handlebars
        'handlebars': 'libs/handlebars/handlebars',
        
        // Handlebars Text Helper
        'hbs': 'libs/requirejs-hbs/hbs',

        // Requirejs Text Helper
        'text': 'libs/requirejs-text/text',

        // Requirejs Text Helper
        'sticky': 'libs/sticky/jquery.sticky',

        // Modernizr
        'modernizr': 'libs/modernizr/modernizr',

        // RequireJS Plugin - JSON
        'json': 'libs/requirejs-plugins/src/json',


        //
        // === Helpers ===

        // Handlebar helpers
        'handlebar.helpers': 'global/helpers/helpers.handlebars',

        // Dialog region
        'region.dialog': 'global/regions/region.dialog',

        // Header region
        'region.header': 'global/regions/header/layout.header',

        // Footer region
        'region.footer': 'global/regions/footer/layout.footer',


        //
        // === Global extensions ===

        // App.Environment
        'global.environment': 'global/global.environment',

        // App.EventManager
        "global.eventmanager": 'global/global.eventmanager',

        // App.ModuleList
        'global.moduleslist': 'global/global.moduleslist',

        // App.Router
        'global.router': 'global/global.router',

        //
        // === Shared ===

        // shared.modulemanager
        'shared.modulemanager': 'modules/shared/shared.modulemanager'
    },

    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },

        'hbs': {
            deps: ['text', 'handlebars', 'handlebar.helpers']
        },
        
        'backbone': {
            // Dependencies for backbone
            deps: ['jquery', 'underscore'],
            // Grab Backbone from the global 'namespace'
            exports: 'Backbone'
        },

        'lunr': {
            deps: ['backbone'],
            exports: 'lunr'
        },

        'backbone.picky': {
            deps: ['backbone'],
            exports: 'Backbone.Picky'
        },

        // Backbone Pageable
        'backbone.pageable': {
            deps: ['backbone']
        },

        // Backgrid
        'backbone.backgrid': {
            deps: ['backbone'],
            exports: 'Backgrid'
        },

        // Backgrid paginator
        'backbone.backgrid.paginator': {
            deps: ['backbone.backgrid'],
            exports: 'Backgrid.Extension.Paginator'
        },

        // Backgrid Selectall
        // Dependency: Backgrid
        'backbone.backgrid.selectall': {
            deps: ['backbone.backgrid']
        },

        // Backgrid Filter
        // Dependency: Backgrid
        'backbone.backgrid.filter': ['backbone.backgrid', 'lunr'],

        // Marionette Module
        'marionette': {
            // Ensure that marionette is loaded after backbone
            deps: ['backbone'],
            // Expose Marionette via the 'Backbone' namespace
            exports: 'Backbone.Marionette'
        },

        // fastclick
        'fastclick': {
            // Ensure that foundation is loaded after jquery
            deps: ['jquery'],
            // Expose the Foundation module
            exports: 'Fastclick'
        },

        // Foundation Core
        'foundation': {
            // Ensure that foundation is loaded after jquery
            deps: ['jquery', 'modernizr', 'fastclick'],
            // Expose the Foundation module
            exports: 'Foundation'
        },

        // Foundation Tooltip
        'foundation.tooltip': {
            deps: ['foundation']
        },        

        // Foundation Tooltip
        'foundation.dropdown': {
            deps: ['foundation']
        }
    }
});